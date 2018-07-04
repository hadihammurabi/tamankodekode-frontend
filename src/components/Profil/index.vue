<template>
  <v-container>
    <v-layout>
      <v-flex md6 offset-sm3>
        <v-card>
          <v-card-title>
            <v-btn
              flat
              color="red"
              @click="() => this.$router.push('/kategori')"
              ><v-icon>arrow_back</v-icon>Kembali</v-btn>
            <h3>{{ user.username }}</h3>
          </v-card-title>
          <v-card-text>
            <v-alert type="info" :value="user.verified">Terverifikasi</v-alert>
            <v-alert type="error" :value="!user.verified">Belum Verifikasi</v-alert>
          </v-card-text>
          <v-card-actions>
            <v-flex text-sm-right>
              <v-btn color="red" dark @click="logout()"><v-icon>exit_to_app</v-icon> Logout</v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  async beforeCreate () {
    if(!this.$store.getters.token) this.$router.push('/')

    this.user = await this.$store.getters.user
  },
  methods: {
    logout () {
      this.$store.commit('token', null)
      window.location = '/'
    },
  }
}
</script>
