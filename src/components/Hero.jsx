import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";
import { baseImgURL } from "../constants";

const Hero = () => {
  //* store'a abone oldum;
  const { isLoading, error, movies } = useSelector((store) => store.movies);

  //* her seferinde farklı bir filmin gösterilme olayı;
  const i = Math.floor(Math.random() * movies.length);
  //* burada her seferinde değiğşen "i"'yi movie'ye atama yaptık "index" olarak
  const movie = movies[i];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 md:max-h-[400px]">
      {!movie || isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="font-bold text-3xl">{movie.title}</h1>
            <p className="text-start">{movie.overview}</p>
            <p>
              <span>IMDB:</span>
              <span className="text-yellow-400 ms-2 font-semibold">
                {movie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex gap-5">
              <button className="p-2 bg-red-600 rounded hover:bg-red-700">
                Filmi İzle
              </button>
              <button className="p-2 bg-blue-600 rounded hover:bg-blue-700">
                Listeye Ekle
              </button>
            </div>
          </div>
          <div>
            <img
              className="hero-img my-4 object-cover rounded w-full max-h-[300px]"
              src={baseImgURL + movie.backdrop_path}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
