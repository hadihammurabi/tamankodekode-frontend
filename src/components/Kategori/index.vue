<template>
  <v-container>
    <v-container v-if="loading">
      <v-layout>
        <v-flex text-xs-center>
          <v-progress-circular
            indeterminate
            color="primary"
            :size="100"
            ></v-progress-circular>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex text-xs-center>
          <h2>Taman Kode-Kode</h2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout row wrap v-else>
      <v-flex lg3 v-for="kategori in kategoris" :key="kategori.slug">
        <v-container>
          <v-card>
            <v-card-text>
              <v-flex text-xs-center>
                <img :src="kategori.image" :alt="kategori.title" class="catLogo"/><br/>
              </v-flex>
            </v-card-text>
            <v-card-actions>
              <v-layout text-xs-center>
                <v-flex>
                  <v-badge right>
                    <span slot="badge">{{ kategori.count }}</span>
                      <v-tooltip bottom>
                      <v-btn
                        flat
                        slot="activator"
                        color="primary"
                        @click="goTutorial(kategori)"
                        ><v-icon>arrow_upward</v-icon>Mulai Belajar</v-btn>
                      <span>{{ kategori.title }}</span>
                    </v-tooltip>
                  </v-badge>
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
import TutorialService from '../../services/api/tutorial'
import user from '../../services/api/user'

export default {
  data () {
    return {
      kategoris: [],
      loading: true
    }
  },
  async beforeCreate () {
    if(!this.$store.getters.token) this.$router.push('/')
    this.$store.commit('page', 'kategori')
    const userdata = await this.$store.getters.user
    if (userdata.verified === false) this.$router.push('/emailconfirm')

    try {
      let kategoris = await KategoriService.getAll()
      kategoris = kategoris.map(async (kategori) => {
        try {
          let tutorials = await TutorialService.get(kategori.slug)
          kategori.count = tutorials.length
          return kategori
        } catch (err) {
          console.log(err)
        }
      });
      this.kategoris = await Promise.all(kategoris)
      this.loading = false
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
