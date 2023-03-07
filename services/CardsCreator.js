import Link from "next/link";

export default function Generator({ data, type, title }) {
  return (
    <div className="my-2 ">
      <h1 className="mt-8 text-3xl mx-4 ">{title}</h1>
      <div className="flex gap-10 p-4 mb-4 overflow-x-auto no-scrollbar">
        {data.map(({ id, title, name, poster_path }) => (
          <div key={id} className="flex flex-col items-center min-w-44 ">
            <div className="overflow-ellipsis whitespace-nowrap overflow-x-hidden w-44 text-center">{title || name}</div>
            <div className="max-w-44 mt-4">
              <Link
                // href={`./${type}/${id}`}
                href={{
                  pathname: `./${type}/${id}`,
                }}
              >
                {" "}
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} id={id}></img>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
