import {Route, Routes, Navigate} from 'react-router-dom';

import './App.css';
import {MainLayout} from "./Layout/MainLayout";
import {GenresPage, MoviesByGenrePage, MoviesPage, MovieDetailsPage,SearchPage} from "./Pages";

function App() {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>

                <Route path={'home'} element={<MoviesPage/>}/>
                <Route path={'home/details'} element={<MovieDetailsPage/>}/>

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
