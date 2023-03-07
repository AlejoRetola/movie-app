import { getPopularSeries, getOnAirSeries, getTopRatedSeries } from "../../services/fetching";
import CardsCreator from "../../services/CardsCreator";

export default function Series({ popular, onAir, topRated }) {
  return (
    <div>
      <CardsCreator data={popular} title="Popular Series" type="series" />
      <CardsCreator data={topRated} title="Top Rated Series" type="series" />
      <CardsCreator data={onAir} title="On Air Series" type="series" />
    </div>
  );
}

export async function getStaticProps(context) {
  const popular = await getPopularSeries();

  const onAir = await getOnAirSeries();

  const topRated = await getTopRatedSeries();

  return {
    props: {
      popular,
      onAir,
      topRated,
    },
  };
}

// export async function getStaticPaths() {
//   const popular = await getPopularSeries();

//   const onAir = await getOnAirSeries();

//   const topRated = await getTopRatedSeries();

//   const paths = [];
//   popular.map((item) => {
//     return [...paths, item.id];
//   });
//   return {
//     paths,
//     fallback: "blocking",
//   };
// }
