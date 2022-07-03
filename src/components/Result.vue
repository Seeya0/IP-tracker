<template>
  <div class="flex flex-col">
    <h3 class="text-xs mb-2 uppercase">{{ topic }}</h3>
    <span class="text-2xl">{{ result }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Result',
  props: ['topic', 'result']
})
</script>