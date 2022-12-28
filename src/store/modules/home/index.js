import { getHomeDiscount, getHomeGoodPrice } from "@/services/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDiscount = createAsyncThunk('getHomeDiscount', async () => {
  return getHomeDiscount().then(res => {
    console.log(res)
    return res
  })
})

export const fetchHomeDataAction = createAsyncThunk('fetchdata', async () => {
  return getHomeGoodPrice().then(res => {
    console.log(res)
    return res
  })
})


const homeSlice = createSlice({
  name: 'home',
  initialState: {
    discountInfo: {},
    hotRecommendInfo: {},
    longforInfo: {},
    highScoreInfo: {},
    goodPriceInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
      console.log(state.goodPriceInfo)
    }
  },
  extraReducers: {
    [fetchHomeDiscount.fulfilled](state, { payload }) {
      console.log(payload)
      state.discountInfo = payload
    },
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      console.log(payload)
      state.goodPriceInfo = payload
    }
  }
})
export const { changeGoodPriceInfo } = homeSlice.actions
export default homeSlice.reducer