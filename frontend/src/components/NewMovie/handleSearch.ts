// Response type

interface TMDB_Response {
  results: {
    id: number;
    title: string;
    release_date: string;
  }[];
}

export const handleSearch = async (curSearch: string) => {
  const raw_response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${curSearch}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    },
  );
  const response = (await raw_response.json()) as TMDB_Response;

  return response.results.map((result) => {
    return {
      id: result.id,
      title: result.title,
      year: result.release_date.split("-")[0],
    };
  });
};
