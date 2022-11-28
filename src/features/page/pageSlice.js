import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: "home",
  },
  reducers: {

    setPage: (state, action) => {
      console.log(action)
      state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPage } = pageSlice.actions

export default pageSlice.reducer