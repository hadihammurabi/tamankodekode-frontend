<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
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
                    {{tutorial.nama}}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
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
  beforeCreate () {
    if(!this.$store.getters.token) this.$router.push('/');
  },
  async mounted () {
    try {
      let tuts = await TutorialService.get({kategori: this.$route.params.slug});
      this.tutorials = tuts.data;
      this.tut = this.tutorials[0];
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
