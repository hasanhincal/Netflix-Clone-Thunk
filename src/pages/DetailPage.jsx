import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import { baseImgURL } from "../constants";
import Loader from "../components/Loader";
import DetayDisplay from "../components/DetayDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ActorCart from "../components/ActorCart";

const DetailPage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
    };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {!movie ? (
        <Loader />
      ) : (
        <div>
          {/* üst alan */}
          <div className="relative h-[30vh]">
            <img
              className="w-full h-full object-cover"
              src={baseImgURL + movie.backdrop_path}
              alt=""
            />
            <div className="absolute bg-black inset-0 grid place-items-center bg-opacity-50">
              <h2 className="text-3xl font-semibold">{movie.title}</h2>
            </div>
          </div>
          {/* orta alan */}
          <div className="grid grid-cols-1 md:grid-cols-2 my-10">
            <div>
              <div>
                <DetayDisplay title={"Kategoriler"} data={movie.genres} />
                <DetayDisplay
                  title={"Konuşulan Diller"}
                  data={movie.spoken_languages}
                />
                <DetayDisplay
                  title={"Yapımcı Şirketler"}
                  data={movie.production_companies}
                />
                <DetayDisplay
                  title={"Yapımcı Ülkeler"}
                  data={movie.production_countries}
                />
              </div>
            </div>
            <div>
              <p>{movie.overview}</p>
              <p className="flex flex-col mt-3 gap-2">
                <span>
                  Bütçe:
                  <span className="text-green-500 mx-1">
                    {millify(movie.budget)}
                  </span>
                </span>
                <span>
                  Hasılat:
                  <span className="text-green-500 mx-1">
                    {millify(movie.revenue)}
                  </span>
                </span>
              </p>
            </div>
          </div>
          {/* alt alan */}
          <div>
            <Splide
              options={{
                pagination: false,
                autoWidth: true,
                gap: "10px",
              }}
            >
              {movie.credits.cast.map(
                (item) =>
                  item.profile_path && (
                    <SplideSlide key={item.id}>
                      <ActorCart actor={item} />
                    </SplideSlide>
                  )
              )}
            </Splide>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
