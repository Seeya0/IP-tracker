<template>
  <header>
    <div class="flex flex-col h-screen max-h-screen">

      <!-- 検索 結果表示部分 -->
      <div class="flex justify-center relative bg-teal-300 bg-cover px-4 pt-8 pb-32">

        <!-- 検索バー -->
        <div class="w-full max-w-screen-sm">
          <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
          <div class="flex">
            <input
              class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md bg-white focus:outline-none"
              type="text"
              placeholder="Search for any IP address or leave empty to get your ip info"
            />
            <i
              class="fas fa-chevron-right cursor-pointer bg-black text-white px-4 rounded-tr-md rounded-br-md flex items-center"></i>
          </div>
          <!-- IPの情報を表示 -->
          <IPInfo />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import IPInfo from '../components/IPInfo.vue'

export default defineComponent({
  name: "Home",
  components: { IPInfo },
  setup() {
    const weight = ref('');
    const height = ref('')
    return { weight, height };
  },
})
</script>

<style lang="scss" scoped>
</style>