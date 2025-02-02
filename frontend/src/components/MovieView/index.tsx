import { Suspense } from "react";
import DetailView, { RawDetails } from "./DetailView";
import { useTMDBDataFetch } from "../../util/tmdbDataFetch";

interface MovieViewProps {
  id: number;
}

const MovieView = ({ id }: MovieViewProps) => {
  const detailPromise = useTMDBDataFetch<RawDetails>(
    `https://api.themoviedb.org/3/movie/${id}`,
  );

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DetailView detailPromise={detailPromise} />
    </Suspense>
  );
};

export default MovieView;
