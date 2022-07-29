import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "../slices";

const mainReducer  = combineReducers({movies:moviesReducer});

const setupStore = () => configureStore({reducer:mainReducer});

export {setupStore};