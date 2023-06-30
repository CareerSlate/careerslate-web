import { configureStore } from "@reduxjs/toolkit"
import schoolSlice from "./schoolSlice"
import filterSlice from "./filterSlice"

const store = configureStore({
  reducer: {
    school: schoolSlice,
    filter: filterSlice
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
