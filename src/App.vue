<template>
  <v-app class="grey lighten-2">
    <toolbar></toolbar>
    <v-content>
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
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.catLogo {
  width: 100%;
  height: 200px;
  margin: auto;
}
</style>
