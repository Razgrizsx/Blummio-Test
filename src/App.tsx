import './App.css'
import MovieGrid from './Components/MovieGrid'
import movies from './assets/movies'
import TopBar from './Components/TopBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Movie from './Components/Movie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieGrid movies={movies}/>,
  },
  {
    path: "movie/:movieid",
    element: <Movie movies={movies}/>,
  },
]);


function App() {

  return (
  <div className='bg-zinc-900 h-screen w-screen'>
    <TopBar/>
    <RouterProvider router={router} />
  </div>
   
  )
}

export default App
