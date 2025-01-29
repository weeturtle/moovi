import { useState } from "react";
import SearchBox from "./searchBox";
import MovieView from "../MovieView";

const NewMovie = () => {
  const [chosenID, setChosenID] = useState<number | null>(null);
  const [chosenTitle, setChosenTitle] = useState<string | null>(null);
  const [chosenReleaseDate, setChosenReleaseDate] = useState<string | null>(
    null,
  );

  const updateMovie = (id: number, title: string, release_date: string) => {
    setChosenID(id);
    setChosenTitle(title);
    setChosenReleaseDate(release_date);
  };

  return (
    <div>
      <h1>Add a new movie</h1>
      <SearchBox updateChosenMovie={updateMovie} />

      {chosenID && chosenTitle && chosenReleaseDate && (
        <MovieView
          id={chosenID}
          title={chosenTitle}
          release_date={chosenReleaseDate}
        />
      )}
    </div>
  );
};

export default NewMovie;
