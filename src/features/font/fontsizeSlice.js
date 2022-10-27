import { createSlice } from '@reduxjs/toolkit'

const getLSfont = function(){
  const st = window.localStorage;
  let size = 5;
  if(st.getItem("fontSize")){
    size= parseInt(st.getItem("fontSize"));
  }
  return size;
}
const setLSfont = function(val){
  const st = window.localStorage;
  st.setItem("fontSize", val);
  
}


export const fontsizeSlice = createSlice({
  name: 'fontsize',
  initialState: {
    value: getLSfont(),
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
      if(state.value>14){
        state.value=14;
      }
      setLSfont(state.value)
    },
    decrement: (state) => {
      state.value -= 1
      if(state.value<1){
        state.value=1;
      }
      setLSfont(state.value)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = fontsizeSlice.actions

export default fontsizeSlice.reducer