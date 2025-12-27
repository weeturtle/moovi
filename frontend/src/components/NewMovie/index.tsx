import { useState } from "react";
import SearchBox from "../NewMovieSearch/searchBox";
import MovieView from "../MovieView";
import { TMDB_Movie_Response } from "../../interfaces/movie.interfaces";

const NewMovie = () => {
  const [selectedMovie, setSelectedMovie] =
    useState<TMDB_Movie_Response | null>(null);

  return (
    <div>
      <h1>Add a new movie</h1>
      <SearchBox updateChosenMovie={setSelectedMovie} />

      {selectedMovie && <MovieView id={selectedMovie.id} />}
    </div>
  );
};

export default NewMovie;
