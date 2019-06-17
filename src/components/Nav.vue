<template>
  <div>
  <v-navigation-drawer
    clipped
    fixed
    v-model="drawer"
    app
  >
    <v-list dense>
      <router-link :to="'/'">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>
      <!-- ////////////////////// -->
      <router-link :to="'/works'">
        <v-list-group
          prepend-icon="account_circle"
          no-action
          value="true"
        >
          <v-list-tile sub-group slot="activator">
            <v-list-tile-title>Works</v-list-tile-title>
          </v-list-tile>
          <div v-for="work in works" :key="work">
            <router-link :to="work.path">
              <v-list-tile>
                <v-list-tile-title v-text="work.title"></v-list-tile-title>
              </v-list-tile>
            </router-link>
          </div>
        </v-list-group>
      </router-link>

      <router-link :to="'/contact'">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>

    </v-list>
  </v-navigation-drawer>

  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Worakarn {{msg}}</v-toolbar-title>
  </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'PORTFOLIO',
    drawer: false,
    works: [
      {
        title: 'Todo List',
        path: '/works/todolist'
      },
    ]
  })
}
</script>

<style scoped>

</style>
