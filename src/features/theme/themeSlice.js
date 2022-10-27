import { createSlice } from '@reduxjs/toolkit'

const checkThemeStorage = function(){
  let st = window.localStorage;
  if(st.getItem("theme")){
    return st.getItem("theme");
  } else {
    return "dark";
  }
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: checkThemeStorage(),
  },
  reducers: {

    setTheme: (state, action) => {
      console.log(action)
      state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer