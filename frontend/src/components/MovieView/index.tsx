import { Suspense } from "react";
import DetailView from "./DetailView";

interface MovieViewProps {
  id: number;
  title: string;
  release_date: string;
}

const MovieView = ({ id, title, release_date }: MovieViewProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{release_date}</p>

      <Suspense fallback={<p>Loading...</p>}>
        <DetailView id={id} />
      </Suspense>
    </div>
  );
};

export default MovieView;
