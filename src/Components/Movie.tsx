import { useParams } from "react-router-dom"
type Movies = {
    title: string, 
    description: string, 
    image: string}[]

    type Movie = {
        title: string;
        description: string,
        image: string,
    }
    

    
const Movie = (movies : {movies: Movies}) => {
    const {movieid} = useParams()
    console.log("movie id", movieid)
    const foundMovie = movies.movies.filter((e : Movie) => e.title == movieid)
    console.log("found movie", foundMovie)
    console.log("title", movies.movies[0].title)
    return(
        <div className="flex justify-center">
        <div className="bg-zinc-800 rounded-md flex flex-row items-center w-[900px] ml-4 mt-7 gap-4">

        <img className="w-[300px] h-[400px] rounded-md" src={foundMovie[0].image} alt="image" />
        <div>
        <div className="text-white pb-4">{foundMovie[0].title}</div>
        <div className="text-white pb-4">{foundMovie[0].description}</div>
        </div>
        </div>
        </div>
    )
}

export default Movie