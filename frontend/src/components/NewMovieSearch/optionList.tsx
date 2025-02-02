import { SearchResult } from "../../interfaces/search.interfaces";
import "./index.scss";

interface OptionListProps {
  options: SearchResult[];
  handleOptionSelect: (id: number) => void;
}

const OptionList = ({ options, handleOptionSelect }: OptionListProps) => {
  return (
    <ul className="SearchListContainer">
      {options.map(({ id, poster_path, title, year }) => {
        return (
          <li
            className="SearchListOption"
            key={id}
            onClick={() => handleOptionSelect(id)}
          >
            <img
              className="SearchListOptionImage"
              src={poster_path}
              alt="movie poster"
              loading="lazy"
            />
            <p className="SearchListOptionTitle">{title}</p>
            <p className="SearchListOptionYear">({year})</p>
          </li>
        );
      })}
    </ul>
  );
};

export default OptionList;
