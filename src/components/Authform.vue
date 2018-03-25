<template>
  <v-tabs v-model="active" color="primary" dark>
    <v-tab>Masuk</v-tab>
    <v-tab>Daftar</v-tab>

    <v-tab-item>
      <loginform :goto="goto"></loginform>
    </v-tab-item>
    <v-tab-item>
      <signupform></signupform>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import Loginform from './Loginform'
import Signupform from './Signupform'

export default {
  components: {
    Loginform,
    Signupform
  },
  data() {
    return {
      active: null
    }
  },
  props: ['goto'],
}
</script>

<style></style>
