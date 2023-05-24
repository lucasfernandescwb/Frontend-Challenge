import { Link } from "react-router-dom";

import { POSTER_URL } from "../api";
import { Movie } from "../utils/entities";

type CardProps = {
  data: Movie;
};

const Card = ({ data }: CardProps) => {
  return (
    <Link
      className="flex-none w-48 transition-all hover:translate-y-[-.25rem] hover:cursor-pointer group mb-2"
      to={`/movie/${data.id}`}
    >
      <div className="h-[17rem] overflow-hidden rounded mb-1">
        <img src={`${POSTER_URL}/${data.poster_path}`} alt="Cover" />
      </div>
      <p className="text-ellipsis line-clamp-2 text-sm group-hover:text-indigo-300">
        {data.title}
      </p>
    </Link>
  );
};

export default Card;
