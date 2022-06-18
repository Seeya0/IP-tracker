<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  components: {
  },

  data() {
    return {
      //
    }
  },
})
</script>

<style>
.backgroundImg {
  background-image: url('/images/homeBackground.jpg');
  background-position: 50% 50%;
  background-size: cover;
  opacity: .6;
}
</style>
