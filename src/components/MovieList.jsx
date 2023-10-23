import MovieCard from "./MovieCard";

// eslint-disable-next-line 
const MovieList = ({movies, deleteMovie, handleClickEdit}) => {
    console.log(movies);
  return (
      <ul>
        {movies.map((movie) => (
            <MovieCard  key={movie.id} movie={movie} handleClickEdit={handleClickEdit} />
            ))}
      </ul>
  );
};

export default MovieList
