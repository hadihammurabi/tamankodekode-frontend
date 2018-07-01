<template>
  <v-container>
    <v-alert :value="true" color="error" v-model="unsuccess" dismissible>
      Gagal mendaftar. <br/> Email sudah terpakai, silakan ganti yang lainnya.
    </v-alert>
    <v-form v-model="valid">
      <v-text-field
        label="Email"
        v-model="email"
        :rules="emailRules"
       ></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
        type="password"
        :rules="passwordRules"
       ></v-text-field>
      <v-text-field
        label="Password Confirmation"
        v-model="passwordConfirm"
        type="password"
        :rules="passwordConfirmRules"
       ></v-text-field>
      <v-btn
        color="info"
        @click="daftar()"
        :disabled="!valid"
      >Daftar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import UserService from '../services/api/user'
export default {
  data () {
    return {
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'Email wajib diisi!',
        v => {
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(v) || 'Masukkan email dengan benar!';
        },
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password wajib diisi!',
        v => v.length >= 6 || 'Password minimal 6 karakter!',
      ],
      passwordConfirm: '',
      passwordConfirmRules: [
        v => !!v || 'Password Confirmation wajib diisi!',
        v => v === this.password || 'Password Confirmation harus sama dengan Password!'
      ],
      unsuccess: false
    }
  },
  methods: {
    async daftar () {
      try {
        const data = await UserService.signup(this.email, this.password)
        window.location.replace('/')
      } catch (err) {
        this.unsuccess = true
      }
    }
  }
}
</script>

<style></style>
