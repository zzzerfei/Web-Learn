import { defineStore } from "pinia";
import { getCityAll } from '@/service/modules/city'
const useCityStore = defineStore("city", {
  state: () => {
    return {
      allCity: {},
      currentCity: { cityName: '广州' }
    }
  },
  actions: {
    async fetchAllCityData() {
      const res = await getCityAll()
      console.log(res)
      this.allCity = res.data
    }
  }
})
export default useCityStore