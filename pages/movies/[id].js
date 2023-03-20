import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { searchMovie, getMovieTrailer, getSimilar } from "../../services/fetching";
import star from "../../public/star.svg";
import equis from "../../public/cross.svg";
import youtube from "../../public/youtube-play.svg";
import { useState } from "react";

export default function MoviesPage({ movieInfo, movieTrailer, similarMovies }) {
  const movie = movieInfo;
  const genres = movie.genres;
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div className="absolute w-screen h-full  z-0">
        <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} fill priority className="w-full h-full object-cover " />
      </div>
      <div className="flex flex-col">
        <div>
          <div
            className="flex  md:justify-center md:flex-row  w-full h-screen relative z-10 
               flex-col items-center "
          >
            <div className=" md:w-[400px] lg:w-2/5 h-5/6 flex justify-center items-center w-full ">
              <div className="w-full h-auto  flex flex-col  items-start justify-center  bg-black opacity-90  py-6 px-2 mx-3  rounded-md ">
                <span className="bg-green-500 py-1 px-2 rounded text-xs font-bold mx-1">{movie.status}</span>
                <h1 className="text-3xl m-1">{movie.title}</h1>
                <div className="flex flew-row gap-2 text-xs m-1">
                  {genres.map((genre, index) => {
                    return (
                      <div key={index} className="border-[1px] border-blue-700 bg-blue-600 bg-opacity-80 p-1 ">
                        {genre.name}
                      </div>
                    );
                  })}
                </div>
                <div className=" flex text-center items-center justify-start gap-1 m-1">
                  <Image src={star} alt="star" width={16} className="flex items-center justify-center text-center" />
                  <p className="text-[12px]">Rating {movie.vote_average}</p>
                </div>
                <h2 className="ml-2">Description</h2>
                <p className="m-2 max-h-[400px] sm:max-h-60 text-ellipsis overflow-y-auto ">{movie.overview ? movie.overview : "There is no Description"}</p>
                <button className="bg-blue-600 px-2 py-1 rounded-lg m-1 flex justify-center items-center gap-1" onClick={handleToggle}>
                  <Image src={youtube} alt="youtube-icon" width={22} />
                  <span className="text-sm">Trailer</span>
                </button>
              </div>
            </div>
            <div className="md:w-[480px]  h-4/6 flex justify-center items-center  w-full mb-4">
              <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="h-full w-3/5 xs:w-[320px]  md:w-full md:h-[95%]  object-contain" width={300} height={200} />
            </div>
          </div>
          <h2 className="text-center mt-2 text-2xl">Similar Movies</h2>
          <div className="flex gap-6  p-4  overflow-x-auto relative z-10 w-full h-full justify-center">
            {similarMovies.map(({ id, title, backdrop_path }, index) => {
              if (index < 8 && backdrop_path) {
                return (
                  <div key={id} className="max-w-xl max-h-[400px] flex flex-col items-center ">
                    <div className="overflow-ellipsis whitespace-nowrap overflow-x-hidden w-44 text-center">{title}</div>
                    <div className="max-w-[280px]">
                      <Link href={`/movies/${id}`}>
                        <Image src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} width={280} height={150} className="w-full h-full object-cover" />
                      </Link>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        {toggled ? (
          <div className="h-full w-full absolute flex justify-center items-center flex-col bg-opacity-90 bg-black pb-10 z-20">
            <div className="flex justify-end w-3/6 ">
              <Image src={equis} alt="X" width={28} onClick={handleToggle} className="cursor-pointer mb-1 " />
            </div>
            <iframe src={`https://www.youtube.com/embed/${movieTrailer}`} className="w-3/6 h-96" allowFullScreen></iframe>
          </div>
        ) : null}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const movieInfo = await searchMovie(context.params.id);
  const movieTrailer = await getMovieTrailer(context.params.id);
  const similarMovies = await getSimilar(context.params.id);
  return {
    props: {
      movieInfo,
      movieTrailer,
      similarMovies,
    },
  };
}

export async function getStaticPaths(context) {
  return {
    paths: [],
    fallback: "blocking",
  };
}
