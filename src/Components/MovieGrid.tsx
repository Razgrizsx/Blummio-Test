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
    console.log(movies)
    return(
        <div className="flex flex-col md:flex-row gap-20 bg-zinc-900 rounded-sm mt-8 justify-center">
            {movies.movies.map((movie : Movie) => {
                return(
                <div className="w-[200px] h-[280]" key={movie.title}>
                    <img className="h-[280px] w-[200px] rounded-md" src={movie.image} alt="image" />
                    <div className="text-white">{movie.title}</div>
                    <div className="text-white ">{movie.description}</div>
                </div>
                )
            })}
        </div>
    )
}

export default MovieGrid