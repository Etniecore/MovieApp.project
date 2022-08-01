import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer,genresReducer} from "../slices";



const mainReducer  = combineReducers({moviesReducer,genresReducer});

const setupStore = () => configureStore({reducer:mainReducer});

export {setupStore};