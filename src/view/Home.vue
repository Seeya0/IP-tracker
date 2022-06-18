<template>
  <header>
    <div class="flex flex-col h-screen max-h-screen">

      <!-- 検索 結果表示部分 -->
      <div class="flex justify-center relative bg-teal-300 bg-cover px-4 pt-8 pb-32">
        aaa
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "Home",
  setup() {
    const weight = ref('');
    const height = ref('')
    return { weight, height };
  },
})
</script>

<style lang="scss" scoped>
</style>