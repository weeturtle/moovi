import { useEffect, useState } from "react";
import { handleSearch } from "./handleSearch";

interface SearchBoxProps {
  updateChosenMovie: (id: number, title: string, release_date: string) => void;
}

export interface Option {
  id: number;
  title: string;
  year: string;
}

const SearchBox = ({ updateChosenMovie }: SearchBoxProps) => {
  const [curSearch, setCurSearch] = useState("");
  const [curOptions, setCurOptions] = useState<Option[]>([]);

  // As user enters a movie title, query the TMDB API for movie titles that match the search query
  // and update the options list with the results

  const handleOptionSelect = (
    id: number,
    title: string,
    releaseDate: string,
  ) => {
    updateChosenMovie(id, title, releaseDate);
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

      <div>
        {curOptions.map((option) => {
          return (
            <div
              key={option.id}
              onClick={() =>
                handleOptionSelect(option.id, option.title, option.year)
              }
            >
              <p>
                {option.title} ({option.year})
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBox;
