<template>
  <div
    class="absolute -bottom-64 lg:-bottom-20 flex flex-col lg:flex-row max-w-screen-md bg-white gap-x-12 gap-y-4 px-6 pt-8 pb-12 mx-8 rounded-md"
  >

    <section>
      <Result
        topic="Ip Address"
        :result="IpInfo.address"
      />
    </section>

    <section>
      <Result
        topic="Location"
        :result="IpInfo.state"
      />
    </section>

    <section>
      <Result
        topic="Timezone"
        :result="IpInfo.timezone"
      />
    </section>

    <section>
      <Result
        topic="ISP"
        :result="IpInfo.isp"
      />
    </section>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Result from './Result.vue'
export default defineComponent({
  props: ["IpInfo"],
  components: { Result }
})
</script>