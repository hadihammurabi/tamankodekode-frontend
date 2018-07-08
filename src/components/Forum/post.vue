<template>
  <div>
    <v-card>
      <v-card-title class="headline">
        Kiriman
      </v-card-title>
      <v-card-text>
        <v-btn block color="primary" v-if="!willPost" @click="willPost = !willPost">Kirimkan Sesuatu</v-btn>
        <v-btn block color="error" v-if="willPost" @click="confirmBatalPost()">Batal</v-btn>

        <v-flex>
          <v-layout v-if="willPost">
            <v-flex>
              <markdown-editor v-model="post"></markdown-editor>
              <v-btn block color="primary" @click="sendPost(post)">Simpan</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-divider></v-divider>
        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-content>
              <v-list-tile-title>Hadi Hidayat Hammurabi</v-list-tile-title>
              <v-list-tile-sub-title>Sebenarnya gmana ya?</v-list-tile-sub-title>
              <v-list-tile-sub-title>
                <v-chip outline>PHP</v-chip>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialogBatalPost" max-width="500" persistent>
      <v-card>
        <v-card-title class="headline">Membatalkan kiriman?</v-card-title>
        <v-card-text>Semua yang sudah Anda masukkan akan terhapus.</v-card-text>
        <v-card-actions>
          <v-flex text-xs-right>
            <v-btn  @click="dialogBatalPost = false">Tetap menulis</v-btn>
            <v-btn color="primary" @click="batalPost()">Hapus saja</v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: '',
      willPost: false,
      dialogBatalPost: false
    }
  },
  async beforeCreate () {

  },
  methods: {
    confirmBatalPost () {
      this.dialogBatalPost = true
    },
    batalPost () {
      this.post = ''
      this.willPost = false
      this.dialogBatalPost = false
    },
    async sendPost (post) {
      console.log(post)
    }
  }
}
</script>
