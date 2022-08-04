import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {apiKey} from "../../../services";


const initialState = {
    errors: null,
    actors:[]
}

const castSlice = createSlice({
    name: 'castSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getCast.fulfilled,(state,action)=>{
                state.erros = null;
                state.actors = action.payload
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
    }
)

const getCast = createAsyncThunk(
    'castSlice/getCast',
    async ({id},{rejectWithValue})=>{
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`).then(response=>response.json());
            return data;
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)



const {reducer:castReducer} = castSlice;

const castActions ={
    getCast
};
export {castReducer,castActions};