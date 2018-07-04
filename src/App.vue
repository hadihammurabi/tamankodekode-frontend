<template>
  <v-app>
    <toolbar v-if="$store.getters.token"></toolbar>
    <v-content style="margin: 5em 0 5em 0">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer class="grey darken-3" dark>
      <v-layout>
        <v-flex text-xs-center>
          <v-card class="flex" flat tile>
            <v-card-title class="grey lighten-5 justify-center">
              <img :src="logo" alt="Taman Kode-Kode" title="Taman Kode-Kode" style="width: 10%"/>
            </v-card-title>
            <v-card-actions class="justify-center">
              &copy; 2018 Taman Kode-Kode
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import logo from './assets/logo.png'

export default {
  components: {
    Toolbar
  },
  data () {
    return {
      logo
    }
  }
}
</script>

<style>
.catLogo {
  width: 100%;
  height: 100px;
  margin: auto;
}
</style>
