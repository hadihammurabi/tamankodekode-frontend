<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex md8 offset-md2>
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

export default {
  components: {
    Authform
  },
  data () {
    return {
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
