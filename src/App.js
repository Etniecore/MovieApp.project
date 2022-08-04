import {Route, Routes, Navigate} from 'react-router-dom';

import './App.css';
import {MainLayout} from "./Layout/MainLayout";
import {GenresPage, MoviesByGenrePage, MoviesPage, MovieDetailsPage, SearchPage, MainPage} from "./Pages";

function App() {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'main'}/>}/>
                <Route path={'main'} element={<MainPage/>}/>
                <Route path={'main/details'} element={<MovieDetailsPage/>}/>

                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/details'} element={<MovieDetailsPage/>}/>

                <Route path ={'search'} element = {<SearchPage/>}/>
                <Route path={'search/details'} element={<MovieDetailsPage/>}/>

                <Route path={'genres'} element={<GenresPage/>}>
                    <Route path={'movies'} element={<MoviesByGenrePage/>}/>
                </Route>

                <Route path={'genres/movies/details'} element ={<MovieDetailsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
