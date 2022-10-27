import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: "en",
  },
  reducers: {

    setLanguage: (state, action) => {
      console.log(action)
      state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer