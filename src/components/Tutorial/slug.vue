<template>
  <v-container>
    <iframe width="560" height="315" :src="tut.url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
      v-for="tut in tutorials"></iframe>
  </v-container>
</template>

<script>
import TutorialService from '../../services/api/tutorial'

export default {
  data () {
    return {
      tutorials: []
    }
  },
  async mounted () {
    try {
      let tuts = await TutorialService.get({kategori: this.$route.params.slug})
      this.tutorials = tuts.data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>
