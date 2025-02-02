export interface TMDB_Movie_Response {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genres: string[];
  runtime: number;
  vote_average: number;
}
