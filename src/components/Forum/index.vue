<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4>
        <tag/>
      </v-flex>
      <v-flex md8>
        <post/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import forumws from '../../services/ws/forum'
import tag from './tag'
import post from './post'

export default {
  components: {
    tag,
    post
  },
  data () {
    return {
      options: {

      }
    }
  },
  async beforeCreate () {
    const userdata = await this.$store.getters.user
    if (userdata.verified === false) this.$router.push('/emailconfirm')

    this.$store.commit('page', 'forum')
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
