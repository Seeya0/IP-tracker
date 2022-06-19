<template>
  <div
    class="absolute -bottom-64 lg:-bottom-20 flex flex-col lg:flex-row bg-white gap-x-12 gap-y-4 px-8 pt-8 pb-12 mx-8 rounded-md"
  >

    <section>
      <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">IP Address</h3>
        <span class="text-2xl">{{ IpInfo.address }}</span>
      </div>
    </section>

    <section>
      <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">Location</h3>
        <span class="text-2xl">{{ IpInfo.state }}</span>
      </div>
    </section>

    <section>
      <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">Timezone</h3>
        <span class="text-2xl">{{ IpInfo.timezone }}</span>
      </div>
    </section>

    <section>
      <div class="flex flex-col">
        <h3 class="text-xs mb-2 uppercase">ISP</h3>
        <span class="text-2xl">{{ IpInfo.isp }}</span>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: ['IpInfo']
})
</script>