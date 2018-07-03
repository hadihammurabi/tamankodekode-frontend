<template>
  <v-container>
    <v-layout row wrap>
      <v-flex sm3 v-for="kategori in kategoris" :key="kategori.slug">
        <v-container>
          <v-card>
            <v-card-text>
              <img :src="kategori.image" :alt="kategori.nama" class="catLogo">
            </v-card-text>
            <v-card-actions>
              <v-layout text-xs-center>
                <v-flex>
                  <v-btn
                    flat
                    color="primary"
                    @click="goTutorial(kategori.slug)"
                  >Mulai Belajar</v-btn>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import KategoriService from '../../services/api/kategori'
import user from '../../services/api/user'

export default {
  data () {
    return {
      kategoris: []
    }
  },
  async beforeCreate () {
    if(!this.$store.getters.token) this.$router.push('/')
    const userdata = await this.$store.getters.user
    if (userdata.verified === false) this.$router.push('/emailconfirm')
    this.$store.commit('page', 'kategori')
  },
  async mounted () {
    try {
      //let kategoris = await KategoriService.getAll()
      let kategoris
      this.kategoris = kategoris
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    goTutorial (kategori) {
      this.$router.push(`/kategori/${kategori}`)
    }
  }
}
</script>

<style></style>
