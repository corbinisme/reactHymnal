import { createSlice } from '@reduxjs/toolkit'

export const hymnSlice = createSlice({
  name: 'hymn',
  initialState: {
    value: 4,
  },
  reducers: {

    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },

    incrementHymn: (state, action) => {
      console.log(action)
      state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementHymn } = hymnSlice.actions

export default hymnSlice.reducer