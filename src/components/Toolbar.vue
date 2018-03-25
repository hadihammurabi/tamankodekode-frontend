<template>
  <v-toolbar color="primary" dark>
    <v-toolbar-title>Taman Kode-Kode</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu v-if="token">
      <v-btn icon slot="activator">
        <v-icon>person</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile @click="logout()">
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    token () {
      return this.$store.getters.token
    }
  },
  methods: {
    logout () {
      this.$store.commit('token', null)
      window.location.replace('/')
    }
  }
}
</script>

<style scoped></style>
