// MOVIES

export const getPopularMovies = async () => {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c646272113940d36558f953542270d34&page=1");
  const data = res.json();

  return data;
};

export const getRatedMovies = async () => {
  const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c646272113940d36558f953542270d34&page=1");
  const data = res.json();

  return data;
};

export const getUpComingMovies = async () => {
  const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=c646272113940d36558f953542270d34&language=en-US&page=1");
  const data = res.json();

  return data;
};
export const searchByName = async (nombre) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/keyword?api_key=c646272113940d36558f953542270d34&query=${nombre}&page=1`);
  const data = await res.json();

  return data;
};

export const searchMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c646272113940d36558f953542270d34&language=en-US`);
  const data = await res.json();

  return data;
};

export const searchMulti = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=c646272113940d36558f953542270d34&language=en-US&query=${id}&page=1&include_adult=false`);
  const data = await res.json();

  return data;
};

// get similar MOVIES

export const getSimilar = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=c646272113940d36558f953542270d34&language=en-US&page=1`);
  const data = await res.json();
  return data.results;
};

export const getMovieTrailer = async (id) => {
  let url = "";
  let urlKey = "";
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c646272113940d36558f953542270d34&language=en-US`).then((res) => res.json());

  if (url !== "Trailer" && response.id !== 477962) {
    response.results.map((movie, index) => {
      if (movie.type === "Trailer") {
        url = movie.type;
        urlKey = movie.key;

        return url;
      }
    });
  }

  return urlKey;
};

// SERIES

export const searchSeries = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=c646272113940d36558f953542270d34&language=en-US`);
  const data = await res.json();

  return data;
};

export const getSimilarSeries = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=c646272113940d36558f953542270d34&language=en-US&page=1`);
  const data = await res.json();
  return data.results;
};

export const getPopularSeries = async () => {
  const res = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=c646272113940d36558f953542270d34&language=en-US&page=1");
  const data = await res.json();
  return data.results;
};

export const getTopRatedSeries = async () => {
  const res = await fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=c646272113940d36558f953542270d34&language=en-US&page=1");
  const data = await res.json();
  return data.results;
};

export const getOnAirSeries = async () => {
  const res = await fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=c646272113940d36558f953542270d34&language=en-US&page=1");
  const data = await res.json();
  return data.results;
};

export const getSeriesTrailer = async (id) => {
  let url = "";
  let urlKey = "";
  const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=c646272113940d36558f953542270d34&language=en-US`).then((res) => res.json());

  if (url !== "Trailer") {
    response.results.map((series, index) => {
      if (series.type === "Trailer") {
        url = series.type;
        urlKey = series.key;

        return url;
      }
    });
  }

  return urlKey;
};

// Actors

export const getActorDetails = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=c646272113940d36558f953542270d34&language=en-US`);
  const data = await res.json();

  return data;
};
