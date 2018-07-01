<template>
  <v-container>
    <v-alert :value="true" color="error" v-model="unsuccess" dismissible>
      Gagal mengautentikasi. <br/> Periksa kembali masukan Anda!
    </v-alert>
    <v-form v-model="valid">
      <v-text-field
        label="Email"
        v-model="email"
        :rules="emailRules"
      ></v-text-field>
      <v-text-field
        label="Password"
        type="password"
        v-model="password"
        :rules="passwordRules"
      ></v-text-field>
      <v-btn
        color="info"
        @click="masuk()"
        :disabled="!valid"
      >Masuk</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import UserService from '../services/api/user'

export default {
  data () {
    return {
      valid: false,
      unsuccess: false,
      email: '',
      emailRules: [
        v => !!v || 'Email wajib diisi!',
        v => {
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(v) || 'Masukkan email dengan benar!';
        }
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password wajib diisi!',
        v => v.length >= 6 || 'Password minimal 6 karakter!'
      ],
    }
  },
  methods: {
    async masuk () {
      try {
        let response = await UserService.auth(this.email, this.password)
        if (response.data.token != undefined) {
          this.$store.commit('token', response.data.token)
          this.$router.push('/kategori')
        }
      } catch (e) {
      } finally {
        this.unsuccess = true
      }
    }
  }
}
</script>

<style></style>
