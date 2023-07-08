import { createSlice } from "@reduxjs/toolkit"

const searchCacheSlice = createSlice({
  name: "search",
  initialState: {
    searchCache: {}
  },
  reducers: {
    setSearchCache: (state, action) => {
      state.searchCache = { ...state.searchCache, ...action.payload }
    }
  }
})

export const { setSearchCache } = searchCacheSlice.actions
export default searchCacheSlice.reducer
