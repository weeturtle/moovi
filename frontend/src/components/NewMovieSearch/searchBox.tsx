import { useEffect, useState } from "react";
import { handleSearch } from "./handleSearch";
import OptionList from "./optionList";
import { TMDB_Movie_Response } from "../../interfaces/movie.interfaces";

interface SearchBoxProps {
  updateChosenMovie: (movie: TMDB_Movie_Response) => void;
}

const SearchBox = ({ updateChosenMovie }: SearchBoxProps) => {
  const [curSearch, setCurSearch] = useState("");
  const [curOptions, setCurOptions] = useState<TMDB_Movie_Response[]>([]);

  // As user enters a movie title, query the TMDB API for movie titles that match the search query
  // and update the options list with the results

  const handleOptionSelect = (movie: TMDB_Movie_Response): void => {
    updateChosenMovie(movie);
    setCurSearch("");
    setCurOptions([]);
  };

  useEffect(() => {
    const fetchOptions = async () => {
      if (curSearch) {
        setCurOptions(await handleSearch(curSearch));
      } else {
        setCurOptions([]);
      }
    };

    fetchOptions();
  }, [curSearch]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={curSearch}
        onChange={(e) => setCurSearch(e.target.value)}
      />

      <OptionList
        options={curOptions}
        handleOptionSelect={handleOptionSelect}
      />
    </div>
  );
};

export default SearchBox;
