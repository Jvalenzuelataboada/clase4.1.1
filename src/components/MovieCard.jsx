import { IconEdit, IconTrash } from "@tabler/icons-react"


const MovieCard = ({movie, deleteMovie, handleClickEdit}) => {
  return (
    <div>
      <li>
              <h5>{movie.name}</h5>
              <ul>
                <li>Genero: {movie.genre}</li>
                <li>Duracion: {movie.duration}</li>
                <li>Lanzamiento: {movie.release_date}</li>
              </ul>
            </li>
      <div> 
        <button onClick={() => handleClickEdit(movie)}><IconEdit size={18} /> Editar </button>
        <button onClick={() => deleteMovie(movie.id)}><IconTrash size={18} /> Eliminar </button>
      </div>
    </div>
  )
}

export default MovieCard
