<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex md3 class="text-xs-center">
        <img :src="logo" id="logo" alt="Taman Kode-Kode" title="Taman Kode-Kode"/>
        <h1>Taman Kode-Kode</h1>
      </v-flex>
      <v-flex md7 offset-md1>
        <v-card>
          <v-card-text>
            <authform></authform>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Authform from './Authform'
import logo from '../assets/logo.png'

export default {
  components: {
    Authform
  },
  data () {
    return {
      logo
    }
  },
  computed: {
    kategoris() {
      return [
      ]
    }
  },
  methods: {
  },
  beforeCreate () {
    if (this.$store.getters.token) this.$router.push('/kategori')
  }
}
</script>

<style scoped>
#logo {
  width: 100%;
}
</style>
