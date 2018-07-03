<template>
  <v-layout>
    <v-flex md8 offset-md2 text-xs-center>
      <h2>Email Anda Belum Diverifikasi.</h2>
      <h4>Silakan klik di bawah ini, untuk mengirim email konfirmasi.</h4>
      <v-btn color="primary" @click="verify()">Kirim kode verifikasi</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import user from '../services/api/user'

export default {
  data () {
    return {
    }
  },
  methods: {
    async verify () {
      try {
        await user.verify(this.$store.getters.token)
      } catch (e) { }
    }
  },
  async beforeCreate () {
    const userdata = await this.$store.getters.user
    if (userdata.verified === true) {
      this.$router.push('/kategori')
    }
  }
}
</script>
