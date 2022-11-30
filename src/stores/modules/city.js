import { defineStore } from "pinia";

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
      this.allCity = res.data
    }
  }
})
export default useCityStore