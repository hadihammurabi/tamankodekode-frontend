<template>
  <div>
    <v-toolbar color="primary" dark>
      <v-toolbar-title @click="$router.push('/kategori')">
        Taman Kode-Kode
      </v-toolbar-title>
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
    <v-alert :value="verified && page != 'home'" type="warning">
      Akun Anda belum terverifikasi. Silakan ikuti petunjuk verifikasi di email Anda!
      <v-btn color="warning">Kirim ulang kode verifikasi</v-btn>
    </v-alert>
  </div>
</template>

<script>
import user from '../services/api/user'

export default {
  data () {
    return {
      verified: false
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
    logout () {
      this.$store.commit('token', null)
      window.location.replace('/')
    }
  },
  async beforeCreate () {
    try {
      const data = await user.whois(this.$store.getters.token)
      this.verified = data.verified
    } catch (e) { }
  }
}
</script>
