import { useRouter } from "next/router";
import { useContext } from "react";
import { searchByName, searchMovie, searchMulti, searchSeries } from "../../services/fetching";
import SearchGenerator from "../../services/SearchCardsCreator";

export default function Search({ dataType }) {
  const filteredData = dataType.filter((item) => item.type !== "empty").map((item) => ({ type: item.type, data: item.data }));
  return (
    <>
      <SearchGenerator info={filteredData} title="Results" />
    </>
  );
}

export async function getServerSideProps(context) {
  const { results: data } = await searchMulti(context.query.name);

  const dataType = data.map((datos) => {
    if (datos.title && datos.backdrop_path) {
      return { type: "movies", data: datos };
    } else if (!datos.known_for && datos.backdrop_path) {
      return { type: "series", data: datos };
    } else if (datos.profile_path) {
      return { type: "actors", data: datos };
    } else {
      return { type: "empty", data: datos };
    }
  });

  return {
    props: {
      dataType,
    },
  };
}
