import { defineStore } from "pinia";
import localCache from '@/utils/cache'

const CACHE_SEARCH_HISTORY = "CACHE_SEARCH_HISTORY"

export const useSearchStore = defineStore('searchStore', {
  state: () => {
    return {
      searchHistorys: []
    }
  },
  getters: {
    getSearchHistorys: (state) => {
      let historys = state.searchHistorys || []
      if (historys.length) {
        historys = localCache.getCache(CACHE_SEARCH_HISTORY) || []
      }
      historys = historys.reverse()
      return historys.map((item) => {
        return {
          itemType: '搜索历史',
          name: item
        }
      })
    }
  },
  actions: {
    addSearchHistory(keyword) {
      if (!this.searchHistorys.includes(keyword)) {
        this.searchHistorys.push(keyword)
      }
      let len = this.searchHistorys.length
      if (len >= 10) {
        this.searchHistorys = this.searchHistorys.slice(len - 10, len)
      }
      localCache.setCache(CACHE_SEARCH_HISTORY, this.searchHistorys)
    },
    initSearchHistory() {
      this.searchHistorys = localCache.getCache(CACHE_SEARCH_HISTORY) || []
    },
    clearSearchHistory() {
      this.searchHistorys = []
      localCache.deleteCache(CACHE_SEARCH_HISTORY)
    }
  }
})