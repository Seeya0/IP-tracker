<template>
  <header>
    <div class="flex flex-col h-screen max-h-screen">

      <!-- 検索 結果表示部分 -->
      <div class="z-20 flex justify-center relative bg-teal-300 bg-cover px-4 pt-8 pb-32">

        <!-- 検索バー -->
        <div class="w-full max-w-screen-sm">
          <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
          <div class="flex justify-center">
            <input
              v-model="queryIp"
              class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md bg-white focus:outline-none"
              type="text"
              placeholder="Search for any IP address or leave empty to get your ip info"
              @keyup.enter="getIpInfo"
            />
            <i
              class="fas fa-chevron-right cursor-pointer bg-black text-white px-4 rounded-tr-md rounded-br-md flex items-center"
              @click="getIpInfo"
            ></i>
            <!-- IPの情報を表示 -->
            <IPInfo
              v-if="IpInfo"
              :IpInfo="IpInfo"
            />
          </div>
        </div>
      </div>

      <!-- マップ -->
      <div
        id="mapid"
        class="h-full z-10"
      ></div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import IPInfo from '../components/IPInfo.vue'
import leaflet from 'leaflet';
import axios from 'axios';

export default defineComponent({
  name: "Home",
  components: { IPInfo },
  setup() {
    let myMap: leaflet.Map | leaflet.LayerGroup<any>;
    const queryIp = ref('');
    const IpInfo = ref<Object>('');

    onMounted(() => {
      myMap = leaflet.map('mapid').setView([51.505, -0.09], 9)

      leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`, {
        maxZoom: 19,
        id: 'mapbox/streets-v11',
        attribution: '© OpenStreetMap'
      }).addTo(myMap);
    })

    const getIpInfo = async () => {
      try {
        const data = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${import.meta.env.VITE_GEO_APIKEY}&ip=${queryIp.value}`)
        const result = data.data;
        console.log(result)

        IpInfo.value = {
          address: result.ip,
          state: result.city,
          timezone: result.time_zone.current_time,
          isp: result.isp,
          lat: result.latitude,
          lng: result.longitude
        }
        leaflet.marker([IpInfo.value.lat, IpInfo.value.lng]).addTo(myMap);
        myMap.setView([IpInfo.value.lat, IpInfo.value.lng], 15)
      } catch (err) {
        alert(err.message)
      }
    }
    return { queryIp, IpInfo, getIpInfo }
  }
})
</script>

<style lang="scss" scoped>
</style>