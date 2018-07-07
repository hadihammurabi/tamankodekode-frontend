<template>
  <v-container>
    <h2>Under Construction</h2>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  async beforeCreate () {
    this.$store.commit('page', 'forum')
  }
}
</script>
