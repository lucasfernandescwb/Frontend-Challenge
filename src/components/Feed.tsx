import { AxiosResponse } from "axios"

import { Movie } from "../utils/entities"
import Card from "./Card"

type FeedProps = {
  response?: AxiosResponse<any, any>
  title: string
}

const Feed = ({ response, title }: FeedProps) => {
  return (
    <div>
      <h2 className="mb-2">{title}</h2>

      <div className="flex gap-4 overflow-x-auto">
        {response?.data.results.map((movie: Movie) => (
          <Card key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  )
}

export default Feed
