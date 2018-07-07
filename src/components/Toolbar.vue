<template>
  <div>
    <v-toolbar color="primary" dark :fixed="true">
      <v-toolbar-title>
        <v-btn icon v-if="$store.getters.page !== 'kategori'" @click="$router.push('/kategori')"><v-icon>arrow_back</v-icon></v-btn>
        <v-btn icon disabled v-else><v-icon></v-icon></v-btn>
          Taman Kode-Kode
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn icon :disabled="$store.getters.page === 'forum'" @click="$router.push('/forum')" slot="activator">
          <v-icon>forum</v-icon>
        </v-btn>
        <span>Forum</span>
      </v-tooltip>
      <v-menu v-if="token">
        <v-tooltip bottom slot="activator">
          <v-btn icon slot="activator">
            <v-icon>person</v-icon>
          </v-btn>
          <span>User</span>
        </v-tooltip>
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
