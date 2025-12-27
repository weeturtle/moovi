import { TMDB_Movie_Response } from "../../interfaces/movie.interfaces";
import "./index.scss";

interface OptionListProps {
  options: TMDB_Movie_Response[];
  handleOptionSelect: (movie: TMDB_Movie_Response) => void;
}

const OptionList = ({ options, handleOptionSelect }: OptionListProps) => {
  return (
    <ul className="SearchListContainer">
      {options.map((movie) => {
        return (
          <li
            className="SearchListOption"
            key={movie.id}
            onClick={() => handleOptionSelect(movie)}
          >
            <img
              className="SearchListOptionImage"
              src={movie.poster_path}
              alt="movie poster"
              loading="lazy"
            />
            <p className="SearchListOptionTitle">{movie.title}</p>
            <p className="SearchListOptionYear">({movie.release_date})</p>
          </li>
        );
      })}
    </ul>
  );
};

export default OptionList;
