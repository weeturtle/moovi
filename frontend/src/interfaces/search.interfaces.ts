import { TMDB_Movie_Response } from "./movie.interfaces";

export interface TMDB_Search_Response {
  results: TMDB_Movie_Response[];
}

export interface SearchResult {
  id: number;
  title: string;
  year: string;
  poster_path: string;
}
