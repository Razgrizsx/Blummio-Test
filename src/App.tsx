import './App.css'
import MovieGrid from './Components/MovieGrid'
import TopBar from './Components/TopBar'
import movies from './assets/movies'


function App() {
 console.log(movies)
  return (
  <div className='bg-zinc-900 h-screen w-screen'>
    <TopBar/>
    <MovieGrid movies = {movies}/>
  </div>
   
  )
}

export default App
