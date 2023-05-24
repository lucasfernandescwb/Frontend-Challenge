import { useParams } from "react-router-dom";

import { API_KEY, IMG_URL } from "../api";
import { useAxios } from "../utils/useAxios";

import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";
import Loader from "../components/Loader";
import Tags from "../components/Tags";
import { Actor, Tag } from "../utils/entities";
import MovieDetails from "../components/MovieDetails";
import { useState } from "react";
import Modal from "../components/Modal";

function Movie() {
  const { id } = useParams();
  const [modal, setModal] = useState(false);

  const { response, loading, error } = useAxios({
    method: "GET",
    url: `/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`,
  });

  if (loading) return <Loader show />;

  return (
    <>
      {modal && (
        <Modal
          setModal={setModal}
          video={{
            src: response?.data.videos.results[0].key,
            name: response?.data.videos.results[0].name,
          }}
        />
      )}

      {error && <h3>{error.message}</h3>}

      <Hero url={`${IMG_URL}/${response?.data.backdrop_path}`} />

      <div className="wrapper">
        <h1 className="mb-2">{response?.data.title}</h1>

        <div className="flex flex-row items-center flex-wrap gap-2 mb-4">
          {response?.data.genres.map((g: Tag) => (
            <Tags key={g.id} tag={g.name} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          {response?.data.videos.results.length > 0 && (
            <InfoCard
              bg="play"
              video={{
                src: response?.data.videos.results[0].key,
                name: response?.data.videos.results[0].name,
              }}
              setModal={setModal}
            />
          )}
          <InfoCard label="Vote count:" value={response?.data.vote_count} />
          <InfoCard label="Runtime:" value={`${response?.data.runtime}min`} />
          <InfoCard
            label="Released at:"
            value={`${new Date(
              response?.data.release_date
            ).toLocaleDateString()}`}
          />
        </div>
      </div>

      <div className="wrapper mb-6">
        <h2 className="text-zinc-50/50 mb-2">Description</h2>
        <p>{response?.data.overview}</p>
      </div>

      <div className="wrapper flex flex-col sm:flex-row gap-4">
        <aside className="bg-contrast rounded p-2 w-full sm:w-[13rem] h-fit">
          <MovieDetails label="Status" value={response?.data.status} />
          <MovieDetails
            label="Release Date"
            value={new Date(response?.data.release_date).toLocaleDateString(
              "en-US"
            )}
          />
          <MovieDetails
            label="Budget"
            value={response?.data.budget.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          />
          <MovieDetails
            label="Original Title"
            value={response?.data.original_title}
          />
          <MovieDetails
            label="Original Language"
            value={response?.data.original_language}
          />
        </aside>

        <section className="w-full sm:w-[calc(100%_-_13rem)]">
          <h2 className="mb-4">Notable cast</h2>
          <div className="flex items-center justify-center gap-4 flex-wrap sm:justify-normal">
            {response?.data.credits.cast
              .filter((a: Actor) => a.profile_path)
              .slice(0, 20)
              .map((a: Actor) => (
                <div
                  className="w-20 h-20 overflow-hidden rounded-full"
                  key={a.id}
                  title={a.name}
                >
                  <img src={`${IMG_URL}/${a.profile_path}`} alt="Profile" />
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Movie;
