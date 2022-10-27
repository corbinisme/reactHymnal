import { createSlice } from '@reduxjs/toolkit'

export const playingSlice = createSlice({
  name: 'playing',
  initialState: {
    piano: false,
    vocal: false
  },
  reducers: {

    setPlayingPiano: (state, action) => {
      console.log(action)
      state.piano = action.payload;
    },
    setPlayingVocal: (state, action) => {
      console.log(action)
      state.vocal = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPlayingPiano, setPlayingVocal } = playingSlice.actions

export default playingSlice.reducer