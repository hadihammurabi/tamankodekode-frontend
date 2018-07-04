<template>
  <v-container grid-list-xl>
    <v-layout row wrap v-if="tutorials.length > 0">
      <v-flex lg6>
        <iframe
          width="560" 
          height="315" 
          :src="tut.url"
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
      </v-flex>
      <v-flex lg6>
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
      <v-flex lg6 offset-md3>
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
  </v-container>
</template>

<script>
import TutorialService from '../../services/api/tutorial';

export default {
  data () {
    return {
      tutorials: [],
      tut: {},
    };
  },
  computed: {
    slug () {
      return this.$route.params.slug;
    }
  },
  async beforeCreate () {
    if(!this.$store.getters.token) this.$router.push('/');

    try {
      let tuts = await TutorialService.get(this.$route.params.slug);
      this.tutorials = tuts;
      this.tut = tuts[0];
      console.log(this.tut)
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    openTut (tut) {
      this.tut = tut;
    }
  }
}
</script>

<style scoped>
</style>
