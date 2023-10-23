
 
const MovieCard = ({ movie }) => {
    return (
   
        <div className="movie-card" style={{width: "18rem"}}>
  <img src={movie.posterURL} alt={movie.title} class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">{movie.title}</h5>
    <p class="card-text">{movie.description}</p>
    <p class="card-text">Rating: {movie.rate}</p>
  
  </div>
</div>
      
    );
  };
  
  export default MovieCard;
  