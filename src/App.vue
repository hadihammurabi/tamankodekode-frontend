<template>
  <v-app>
    <toolbar v-if="$store.getters.token"></toolbar>
    <v-content style="margin-top: 5em">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer class="grey darken-3" dark>
      <v-layout>
        <v-flex text-xs-center>
          &copy; 2018 Taman Kode-Kode
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'

export default {
  components: {
    Toolbar
  }
}
</script>

<style>
.catLogo {
  width: 100%;
  height: 200px;
  margin: auto;
}
</style>
