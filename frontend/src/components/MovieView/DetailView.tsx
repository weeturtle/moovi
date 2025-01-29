import useDataFetch from "../../util/tmdbDataFetch";

interface DetailViewProps {
  id: number;
}

interface RawDetails {
  overview: string;
  vote_average: number;
  poster_path: string;
  genres: { id: number; name: string }[];
}

const DetailView = ({ id }: DetailViewProps) => {
  const { data, loading, error } = useDataFetch<RawDetails>(
    `https://api.themoviedb.org/3/movie/${id}`,
  );

  if (error) {
    throw error;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data === null ? (
        <p>No data</p>
      ) : (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt="movie poster"
          />
          <p>{data.overview}</p>
          <p>Rating: {data.vote_average}</p>
          <p>Genres: {data.genres.map((genre) => genre.name).join(", ")}</p>
        </>
      )}
    </div>
  );
};

export default DetailView;
