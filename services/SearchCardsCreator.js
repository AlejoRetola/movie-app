import { info } from "autoprefixer";
import Link from "next/link";

export default function SearchGenerator({ info, title }) {
  return (
    <div className="my-2 ">
      <h1 className="mt-8 text-3xl mx-4 text-center lg:text-start">{title}</h1>
      <div className="flex flex-wrap  justify-center  gap-10 p-4 mb-4 ">
        {!info.length <= 0 ? (
          info.map(({ type, data }) => (
            <div key={data.id} className="flex flex-col items-center max-w-[180px] ">
              <div className="overflow-ellipsis whitespace-nowrap overflow-x-hidden w-44 text-center">{data.title || data.name}</div>
              <div className="max-w-44 mt-4">
                <Link href={`./${type}/${data.id}`}>
                  {" "}
                  <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path || data.profile_path}`} id={data.id}></img>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h3>There were no results </h3>
        )}
      </div>
    </div>
  );
}
