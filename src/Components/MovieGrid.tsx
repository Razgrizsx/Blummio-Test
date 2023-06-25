import { Link } from "react-router-dom"

type Movie = {
    title: string;
    description: string,
    image: string,
}

type Movies = {
    title: string, 
    description: string, 
    image: string}[]

const MovieGrid = (movies : {movies: Movies}) => {
    
    return(
        <div className="justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-zinc-900 place-items-center mt-20">
            {movies.movies.map((movie : Movie) => {
                return(   
                <div className="bg-zinc-900 w-[300px]" key={movie.title}>
                        <Link to={`movie/${movie.title}`}>
                            <img className="rounded-md" src={movie.image} alt="thumbnail" />
                        </Link>
                </div>
                )
            })}
        </div>
        </div>
    )
}

export default MovieGrid