import { configureStore } from "@reduxjs/toolkit"
import schoolSlice from "./schoolSlice"
import filterSlice from "./filterSlice"
import schoolDetailSlice from "./schoolDetailSlice"
import searchCacheSlice from "./searchCacheSlice"

const store = configureStore({
  reducer: {
    school: schoolSlice,
    filter: filterSlice,
    schoolDetail: schoolDetailSlice,
    search: searchCacheSlice
  },
  /* Warning: "SerializableStateInvariantMiddleware took more than 32ms in Developnment Mode" */
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // immutableCheck: { warnAfter: 128 },
      // serializableCheck: { warnAfter: 128 },
      immutableCheck: false,
      serializableCheck: false
    })
})

export default store
