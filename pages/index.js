import Link from "next/link";
import { getPopularMovies, getPopularSeries, getRatedMovies } from "../services/fetching";
import Slider from "../components/Slider";
import Head from "next/head";
import Generator from "../services/CardsCreator";

export default function HomePage({ topRated, popular, popularSeries }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Slider info={popular} />
      <Generator data={popular} title={"Popular Movies"} type={"movies"} />
      <Generator data={topRated} title={"Top Rated Movies"} type={"movies"} />
      <Generator data={popularSeries} title={"Popular Series"} type={"series"} />
    </>
  );
}

export async function getStaticProps(context) {
  const { results: topRated } = await getRatedMovies();

  const { results: popular } = await getPopularMovies();

  const popularSeries = await getPopularSeries();
  return {
    props: {
      topRated,
      popular,
      popularSeries,
    },
  };
}

// export async function getStaticPaths() {
//   // retrieve the list of movie series
//   const { results: topRated } = await getRatedMovies();
//   const { results: popular } = await getPopularMovies();
//   const popularSeries = await getPopularSeries();

//   const paths = popularSeries.map((series) => {
//     return {
//       params: {
//         seriesName: series.id,
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
