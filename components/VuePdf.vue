<template>
  <div>
    <client-only placeholder="Loading...">
      <pdf class="pdf" :src="previewLink" :page="1"></pdf>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "VuePdf",
  props: {
    previewLink: { type: String, required: true }
  }
};
</script>

<style lang="css">
.pdf {
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
}
</style>
