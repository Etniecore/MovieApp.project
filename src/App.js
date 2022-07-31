import {Route, Routes, Navigate} from 'react-router-dom';

import './App.css';
import {MainLayout} from "./Layout/MainLayout";
import {GenresPage, MoviesByGenrePage, MoviesPage, MovieDetailsPage} from "./Pages";

function App() {
    return (
        <Routes>

            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<MoviesPage/>}/>
                <Route path={'home/details'} element={<MovieDetailsPage/>}/>
                <Route path={'genres'} element={<GenresPage/>}>
                    <Route path={'movies'} element={<MoviesByGenrePage/>}/>
                </Route>

            </Route>
        </Routes>

    );
}

export default App;
