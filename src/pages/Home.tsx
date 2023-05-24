import { Suspense, useEffect, useState, lazy } from "react"

import { API_KEY, IMG_URL } from "../api"
import { useAxios } from "../utils/useAxios"

import Hero from "../components/Hero"
import Loader from "../components/Loader"

const Feed = lazy(() => import("../components/Feed"))

function Home() {
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1)
      if (counter === 6) setCounter(0)
    }, 4000)

    return () => clearInterval(interval)
  }, [counter])

  const { response: popular } = useAxios({
    method: "GET",
    url: `/movie/popular?api_key=${API_KEY}`,
  })

  const { response: top_rated } = useAxios({
    method: "GET",
    url: `/movie/top_rated?api_key=${API_KEY}`,
  })

  const { response: upcoming } = useAxios({
    method: "GET",
    url: `/movie/upcoming?api_key=${API_KEY}`,
  })

  return (
    <>
      <Hero
        url={`${IMG_URL}/${popular?.data.results[counter].backdrop_path}`}
      />

      <Suspense fallback={<Loader show />}>
        <div className="wrapper space-y-8">
          <Feed response={popular} title="Most popular now" />
          <Feed response={top_rated} title="All time popular" />
          <Feed response={upcoming} title="Upcoming" />
        </div>
      </Suspense>
    </>
  )
}

export default Home
