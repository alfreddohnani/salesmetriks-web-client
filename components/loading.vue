<template lang="html">
  <v-overlay :value="loading">
    <!-- <div class="sk-folding-cube">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div> -->

    <div class="loader">
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </v-overlay>
</template>

<script>
export default {
  data: () => ({
    loading: true
  }),
  methods: {
    start() {
      if (this.$store.state.routerLoadingEnable === true) {
        this.loading = true;
      }
    },
    finish() {
      this.loading = false;
      this.$store.commit("setRouterLoadingEnable", true);
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>

<style lang="scss" scoped>
$size: 30px;
$yellow_light: #fed750;
$yellow: #e6a32f;
$yellow_dark: #c87932;
$duration: 2s;

html,
body {
  height: 100%;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#333, #000);
  transform: translateY(-$size * 1.5);
}

@mixin psuedo {
  display: block;
  content: "";
}

.loader {
  display: inline-flex;
  flex-wrap: wrap;
  width: $size * 3;
  height: $size * 3;
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotate(45deg);
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  width: $size;
  height: $size;
  background: $yellow_light;
  box-shadow: $size * 3.75 $size * 3.75 20px #000;
  animation: move $duration ease-in-out infinite both;
  transform-style: preserve-3d;

  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      animation-delay: $i/2 * -$duration;
    }
  }

  &:before,
  &:after {
    @include psuedo;
    position: absolute;
    width: $size;
    height: $size;
  }
  &:before {
    top: 100%;
    left: 0;
    background: $yellow;
    transform-origin: center top;
    transform: rotateX(-90deg);
  }
  &:after {
    top: 0;
    left: 100%;
    background: $yellow_dark;
    transform-origin: center left;
    transform: rotateY(90deg);
  }
}

@keyframes move {
  0%,
  100% {
    transform: none;
  }
  12.5% {
    transform: translate($size, 0);
  }
  25% {
    transform: translate($size * 2, 0);
  }
  37.5% {
    transform: translate($size * 2, $size);
  }
  50% {
    transform: translate($size * 2, $size * 2);
  }
  62.5% {
    transform: translate($size, $size * 2);
  }
  75% {
    transform: translate(0, $size * 2);
  }
  87.5% {
    transform: translate(0, $size);
  }
}
</style>
