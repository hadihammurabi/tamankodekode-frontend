<template>
  <v-layout>
    <v-flex md8 offset-md2 text-xs-center>
      <h2>Email Anda Belum Diverifikasi.</h2>
      <h4>Silakan klik di bawah ini, untuk mengirim email konfirmasi.</h4>
      <v-btn color="primary" @click="verify()" v-if="!sent">Kirim kode verifikasi</v-btn>
      <v-btn disabled v-else>Kirim ulang dalam {{ wait }} detik</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import user from '../services/api/user'

export default {
  data () {
    return {
      sent: false,
      wait: 30
    }
  },
  methods: {
    async verify () {
      try {
        this.sent = true
        await user.verify(this.$store.getters.token)
      } catch (e) { }
      finally {
        const inv = setInterval(() => {
          if (this.wait <= 0) {
            this.sent = false
            this.wait = 30
            clearInterval(inv)
          }else
            this.wait--
        }, 1000)
      }
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
