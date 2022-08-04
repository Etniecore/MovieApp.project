import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {apiService} from "../../../services";

const initialState = {
    errors: null,
    movies: [],
    trending: [],
    moviesByGenre: [],
    search: [],
    page: null
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await apiService.getAll(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getTrending = createAsyncThunk(
    'moviesSlice/getTrending',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await apiService.getTrending();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

const getByGenre = createAsyncThunk(
    'movieSlice/getByGenre',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await apiService.moviesByGenre(id, page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }

    }
);

const search = createAsyncThunk(
    'movieSlice/search',
    async ({obj}, {rejectWithValue}) => {
        try {
            const {data} = await apiService.search(obj);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null;
                state.movies = action.payload;
                state.page = action.payload.page;

            })

            .addCase(search.fulfilled, (state, action) => {
                state.errors = null;
                state.search = action.payload;
            })

            .addCase(getByGenre.fulfilled, (state, action) => {
                state.errors = null;
                state.moviesByGenre = action.payload;
                state.page = action.payload.page;
            })

            .addCase(getTrending.fulfilled, (state, action) => {
                state.errors = null;
                state.trending = action.payload;
            })

            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload;
                } else {
                    state.errors = null;
                }
            })
    }
});

const {reducer: moviesReducer} = moviesSlice;

const moviesActions = {
    getAll,
    getTrending,
    getByGenre,
    search,
}
export {moviesReducer, moviesActions};