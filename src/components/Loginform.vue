<template>
  <v-container>
    <v-alert :value="true" color="error" v-model="unsuccess" dismissible>
      Gagal mengautentikasi. <br/> Periksa kembali masukan Anda!
    </v-alert>
    <v-form v-model="valid">
      <v-text-field
        label="Username"
        v-model="username"
        :rules="usernameRules"
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
      username: '',
      usernameRules: [
        v => !!v || 'Username wajib diisi.',
        v => v.length >= 3 || 'Username minimal 3 karakter.'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password wajib diisi.',
        v => v.length >= 6 || 'Password minimal 6 karakter.'
      ],
    }
  },
  methods: {
    async masuk () {
      try {
        let response = await UserService.auth(this.username, this.password)
        this.$store.commit('token', response.data.token)
        this.$router.push('/kategori')
      } catch (e) {
        this.unsuccess = true
      }
    }
  }
}
</script>

<style></style>
