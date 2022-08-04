import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer,genresReducer,castReducer} from "../slices";



const mainReducer  = combineReducers({moviesReducer,genresReducer,castReducer});

const setupStore = () => configureStore({reducer:mainReducer});

export {setupStore};