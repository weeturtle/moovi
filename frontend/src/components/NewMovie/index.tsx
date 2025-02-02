import { useState } from "react";
import SearchBox from "../NewMovieSearch/searchBox";
import MovieView from "../MovieView";

const NewMovie = () => {
  const [chosenID, setChosenID] = useState<number | null>(null);

  return (
    <div>
      <h1>Add a new movie</h1>
      <SearchBox updateChosenMovie={setChosenID} />

      {chosenID && <MovieView id={chosenID} />}
    </div>
  );
};

export default NewMovie;
