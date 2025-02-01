import { Suspense } from "react";
import DetailView, { RawDetails } from "./DetailView";
import { useTMDBDataFetch } from "../../util/tmdbDataFetch";

interface MovieViewProps {
  id: number;
  title: string;
  release_date: string;
}

const MovieView = ({ id, title, release_date }: MovieViewProps) => {
  const detailPromise = useTMDBDataFetch<RawDetails>(
    `https://api.themoviedb.org/3/movie/${id}`,
  );

  return (
    <div>
      <h3>{title}</h3>
      <p>{release_date}</p>

      <Suspense fallback={<p>Loading...</p>}>
        <DetailView detailPromise={detailPromise} />
      </Suspense>
    </div>
  );
};

export default MovieView;
