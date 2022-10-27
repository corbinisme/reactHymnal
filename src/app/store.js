import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import fontsizeReducer from "../features/font/fontsizeSlice"
import hymnReducer from "../features/hymn/hymnSlice"
import languageReducer from "../features/language/languageSlice"
import themeReducer from "../features/theme/themeSlice";
import playingReducer from "../features/playing/playingSlice"


export default configureStore({
  reducer: {
    counter: counterReducer,
    fontsize: fontsizeReducer,
    hymn: hymnReducer,
    language: languageReducer,
    theme: themeReducer,
    playing: playingReducer

  },
})

