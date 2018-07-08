<template>
  <v-container grid-list-xl>
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
        <v-flex text-xs-center>
          <h2>Taman Kode-Kode</h2>
        </v-flex>
      </v-layout>
    </v-container>
    <div v-else>
      <v-layout row wrap v-if="tutorials.length > 0">
        <v-flex md6>
          <!--iframe
            width="560" 
            height="315" 
            :src="tut.url"
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
          </iframe-->
          <iframe
            id="player"
            :src="tut.url"
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
          </iframe>
        </v-flex>
        <v-flex md6>
          <v-card>
            <v-card-title>
              <h2>{{ $store.getters.kategori.title }}</h2>
            </v-card-title>
          </v-card>
          <br/>
          <v-card>
            <v-card-text>
              <v-list>
                <v-list-tile 
                  v-for="tutorial in tutorials" 
                  :key="tutorial.id" 
                  @click="openTut(tutorial)" 
                  :disabled="tutorial.id === tut.id">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{tutorial.title}}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout v-else>
        <v-flex lg6 offset-lg3>
          <v-card>
            <v-card-text>
              <p class="text-xs-center">
                Tutorial ini sedang dalam proses pembuatan.<br/>
                Silakan lihat tutorial lainnya <a href="#/kategori">di sini</a>!
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import TutorialService from '../../services/api/tutorial';

export default {
  data () {
    return {
      tutorials: [],
      tut: {},
      loading: true
    };
  },
  computed: {
    slug () {
      return this.$route.params.slug;
    }
  },
  async beforeCreate () {
    if(!this.$store.getters.token) this.$router.push('/');
    if(!this.$store.getters.kategori.title) this.$router.push('/kategori');
    this.$store.commit('page', 'tutorial')

    try {
      let tuts = await TutorialService.get(this.$route.params.slug);
      this.tutorials = tuts;
      this.tut = tuts[0];
    } catch (err) {
      console.log(err);
    }
    this.loading = false
  },
  methods: {
    openTut (tut) {
      this.tut = tut;
    }
  }
}
</script>

<style scoped>
#player {
  width: 100%;
  height: 315px;
}
</style>
