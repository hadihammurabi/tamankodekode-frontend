<template>
  <v-container>
    <v-layout row wrap>
      <v-flex lg3 v-for="kategori in kategoris" :key="kategori.slug">
        <v-container>
          <v-card>
            <v-card-text>
              <v-flex text-xs-center>
                <img :src="kategori.image" :alt="kategori.nama" class="catLogo">
              </v-flex>
            </v-card-text>
            <v-card-actions>
              <v-layout text-xs-center>
                <v-flex>
                  <v-btn
                    flat
                    color="primary"
                    @click="goTutorial(kategori)"
                    ><v-icon>arrow_upward</v-icon>Mulai Belajar</v-btn>
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
    this.$store.commit('page', 'kategori')
    const userdata = await this.$store.getters.user
    if (userdata.verified === false) this.$router.push('/emailconfirm')
  },
  async mounted () {
    try {
      let kategoris = await KategoriService.getAll()
      this.kategoris = kategoris
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    goTutorial (kategori) {
      this.$store.commit('kategori', kategori)
      this.$router.push(`/kategori/${kategori.slug}`)
    }
  }
}
</script>

<style></style>
