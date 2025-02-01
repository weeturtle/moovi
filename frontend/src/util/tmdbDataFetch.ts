export const useTMDBDataFetch = async <T>(
  url: string,
  config?: RequestInit,
): Promise<T> => {
  // Fetches data from the given URL and returns it as a promise
  const response = await fetch(url, {
    ...config,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  });
  return response.json();
};
