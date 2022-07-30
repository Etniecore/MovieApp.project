import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {apiService} from "../../../services";

const initialState = {
    errors: null,
    movies: [],
    search:[]
}

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (_,{rejectWithValue})=>{
        try{
        const {data} = await apiService.getAll();
        return data;
        }catch (e){
        return rejectWithValue(e.response.data)
        }}
)

const search = createAsyncThunk(
    'movieSlice/search',
async ({obj},{rejectWithValue})=>{
    try{
        const {data} = await apiService.search(obj);
        return data;
    }catch (e){
        return rejectWithValue(e.response.data)
    }}
)



const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.errors = null;
                state.movies = action.payload;

            })

            .addCase(search.fulfilled,(state,action)=>{
                state.errors = null;
                state.search = action.payload;
                state.movies = [];
        })
            .addDefaultCase( (state,action)=>{
                const [type] = action.type.split('/').splice(-1);
                if(type === 'rejected'){
                    state.errors = action.payload;
                }else {
                    state.errors = null;
                }
            } )
    }
});

const {reducer:moviesReducer}= moviesSlice;

const moviesActions = {
    getAll,
    search
}
export {moviesReducer,moviesActions};