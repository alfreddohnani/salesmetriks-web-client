<template>
  <span >
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="#3F51B6" dark>
            <v-toolbar-side-icon class="hidden-md-and-up"@click="drawer=!drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            
            
            <v-spacer></v-spacer>
            <v-btn text rounded class="hidden-sm-and-down"> PRICING</v-btn>
            <v-btn text rounded class="hidden-sm-and-down">SUPPORT</v-btn>
            <v-btn color="brown lighten-3" rounded class="hidden-sm-and-down">SIGN IN</v-btn>
        </v-toolbar>

    <v-content>
     
        <nuxt />
     
    </v-content>
    <v-footer color="indigo">
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </span>
</template>


<script>

export default {
  props: {
    source: String
  },
  data() {
        return {
            appTitle: 'SalesMetriks',
            drawer: false,
            items: [
                { title: 'Pricing' },
                { title: ' Support' },
                { title: 'SignIn  ' }
            ]
        };
    },
    
};
</script>
