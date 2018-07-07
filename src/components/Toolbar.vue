<template>
  <div>
    <v-toolbar color="primary" dark :fixed="true">
      <v-toolbar-title @click="$router.push('/kategori')">
        <v-btn flat v-if="$store.getters.page !== 'kategori'"><v-icon>arrow_back</v-icon></v-btn>
        <span>
          Taman Kode-Kode
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat :disabled="$store.getters.page === 'forum'" @click="$router.push('/forum')">
          <v-icon>forum</v-icon>&nbsp;&nbsp;Forum
        </v-btn>
      </v-toolbar-items>
      <v-menu v-if="token">
        <v-btn icon slot="activator">
          <v-icon>person</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="profil()">
            <v-list-tile-title>Profil</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
import user from '../services/api/user'

export default {
  data () {
    return {
    }
  },
  computed: {
    token () {
      return this.$store.getters.token
    },
    page () {
      return this.$store.getters.page
    }
  },
  methods: {
    profil () {
      this.$router.push('/profil')
    },
  },
  async beforeCreate () {
  }
}
</script>
