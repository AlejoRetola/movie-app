import { getPopularMovies, getRatedMovies, getUpComingMovies } from "../../services/fetching";
import Generator from "../../services/CardsCreator";

export default function Movies({ topRated, popular, upcoming }) {
  return (
    <>
      <Generator data={popular} type={"movies"} title="Popular Movies" />
      <Generator data={topRated} type={"movies"} title="Top Rated Movies" />
      <Generator data={upcoming} type={"movies"} title="Upcoming Movies" />
    </>
  );
}

export async function getStaticProps(context) {
  const { results: topRated } = await getRatedMovies();

  const { results: popular } = await getPopularMovies();

  const { results: upcoming } = await getUpComingMovies();
  return {
    props: {
      topRated,
      popular,
      upcoming,
    },
  };
}

// export async function getStaticPaths() {
//   const { results: topRated } = await getRatedMovies();
//   const { results: popular } = await getPopularMovies();
//   const { results: upcoming } = await getUpComingMovies();

//   const paths = [];
//   popular.map(({ id }) => {
//     return paths.push[(id, paths)];
//   });
//   console.log(paths);

//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// }
