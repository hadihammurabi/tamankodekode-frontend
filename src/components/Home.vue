<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex lg6>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/p3HO51WWngg?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </v-flex>
      <v-flex lg6>
        <v-card>
          <v-card-text>
            <authform></authform>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex sm4 v-for="kategori in kategoris" :key="kategori.slug">
        <v-card>
          <v-card-text>
            <img :src="kategori.image" :alt="kategori.nama" class="catLogo">
            <hr/>
          </v-card-text>
          <v-layout justify-center>
            <v-card-actions>
              <v-btn flat color="primary" @click="goLogin(kategori.slug)">Mulai Belajar</v-btn>
            </v-card-actions>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Authform from './Authform'
import KategoriService from '../services/api/kategori'

export default {
  components: {
    Authform
  },
  data () {
    return {
      afterLogin: '',
      kategoris: []
    }
  },
  async mounted () {
    try {
      let kategori = await KategoriService.getAll({limit:3})
      this.kategoris = kategori
    } catch (err) {
      console.log(err)
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
  }
}
</script>

<style scoped>
</style>
