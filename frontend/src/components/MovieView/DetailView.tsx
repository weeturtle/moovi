import { use } from "react";

interface DetailViewProps {
  detailPromise: Promise<RawDetails>;
}

export interface RawDetails {
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  genres: { id: number; name: string }[];
}

const DetailView = ({ detailPromise }: DetailViewProps) => {
  const data = use<RawDetails>(detailPromise);

  return (
    <>
      <h2>{data.title}</h2>
      <p>Release Date: {data.release_date}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt="movie poster"
      />
      <p>{data.overview}</p>
      <p>Rating: {data.vote_average}</p>
      <p>Genres: {data.genres.map((genre) => genre.name).join(", ")}</p>
    </>
  );
};

export default DetailView;
