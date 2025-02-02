import {
  SearchResult,
  TMDB_Search_Response,
} from "../../interfaces/search.interfaces";

export const handleSearch = async (
  curSearch: string,
): Promise<SearchResult[]> => {
  const raw_response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${curSearch}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    },
  );
  const response: TMDB_Search_Response = await raw_response.json();

  return response.results.map((result) => ({
    id: result.id,
    title: result.title,
    year: result.release_date.split("-")[0],
    poster_path: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
  }));
};
