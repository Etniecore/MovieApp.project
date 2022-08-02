import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiService} from "../../../services";


const initialState = {
    errors: null,
    genreList: []
}

const genresSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(getGenres.fulfilled,(state,action) =>{
                state.errors = null;
                state.genreList = action.payload;
            } )
            .addDefaultCase( (state,action)=>{
                const [type] = action.type.split('/').splice(-1);
                if(type === 'rejected'){
                    state.errors = action.payload;
                }else {
                    state.errors = null;
                }
            } )
    }
})

const getGenres = createAsyncThunk(
    'genreSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await apiService.getGenres();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)


const {reducer: genresReducer} = genresSlice;

const genresActions = {
    getGenres
}
export {genresReducer, genresActions};