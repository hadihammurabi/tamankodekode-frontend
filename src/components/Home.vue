<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex md7 offset-md2>
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
      afterLogin: ''
    }
  },
  computed: {
    kategoris() {
      return [
        {
          slug: 'html',
          nama: 'HTML',
          image: HTML
        }, {
          slug: 'php',
          nama: 'PHP',
          image: PHP
        }, {
          slug: 'js',
          nama: 'Javascript',
          image: JS
        }
      ]
    }
  },
  methods: {
    goLogin (cat) {
      this.$store.commit('afterLogin', cat.toLowerCase())
      const form = document.querySelector('[aria-label=Username]')
      form.focus()
    }
  },
  beforeCreate () {
    if (this.$store.getters.token) this.$router.push('/kategori')
    this.$store.commit('page', 'home')
  }
}
</script>

<style scoped>
</style>
