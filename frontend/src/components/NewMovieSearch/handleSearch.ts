import { TMDB_Movie_Response } from "../../interfaces/movie.interfaces";

export const handleSearch = async (
  curSearch: string,
): Promise<TMDB_Movie_Response[]> => {
  const raw_response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${curSearch}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    },
  );

  return raw_response.json();
};
