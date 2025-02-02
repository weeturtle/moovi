import { useEffect, useState } from "react";
import { handleSearch } from "./handleSearch";
import OptionList from "./optionList";
import { SearchResult } from "../../interfaces/search.interfaces";

interface SearchBoxProps {
  updateChosenMovie: (id: number) => void;
}

const SearchBox = ({ updateChosenMovie }: SearchBoxProps) => {
  const [curSearch, setCurSearch] = useState("");
  const [curOptions, setCurOptions] = useState<SearchResult[]>([]);

  // As user enters a movie title, query the TMDB API for movie titles that match the search query
  // and update the options list with the results

  const handleOptionSelect = (id: number): void => {
    updateChosenMovie(id);
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
