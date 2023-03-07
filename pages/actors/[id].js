import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import star from "../../public/star.svg";
import { useState } from "react";
import { getActorDetails } from "../../services/fetching";

export default function MoviesPage({ actorInfo }) {
  console.log(actorInfo);

  //   const [toggled, setToggled] = useState(false);
  //   const handleToggle = () => {
  //     setToggled(!toggled);
  //   };

  return (
    <>
      <Head>
        <title>Mi pana</title>
      </Head>

      <div className="flex flex-row gap-2 mx-2 justify-center border-2">
        <div className="max-w-2xl border-2">
          <h1 className="text-4xl mb-6">{actorInfo.name}</h1>
          <p className="text-md ml-4">{actorInfo.biography}</p>
        </div>
        <div className="flex flex-col items-center gap-3 border-2">
          <div className="max-h-[320px] ">
            <img src={`https://image.tmdb.org/t/p/original/${actorInfo.profile_path}`} className="object-contain w-full h-full mt-2"></img>
          </div>
          <div className="w-56 max-w-56">
            <ul className="mt-1  w-full ">
              <li className="flex justify-between">
                <div className="font-semibold">Gender</div>
                <div>{actorInfo.gender === 2 ? "Male" : "Female"}</div>
              </li>
              <li className="flex justify-between">
                <div className="font-semibold">Birthday</div>
                <div>{actorInfo.birthday}</div>
              </li>
              <li className="flex justify-between">
                <div className="font-semibold">State</div>
                <div>{actorInfo.deathday ? "Dead" : "Alive"}</div>
              </li>
              <li>
                <span className="text-sm font-semibold">Also known as</span>
                <ul className="ml-6 text-xs">
                  {actorInfo.also_known_as.map((name, index) => {
                    if (index > 5) {
                      return;
                    } else {
                      return <li className="list-disc">{name}</li>;
                    }
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const actorInfo = await getActorDetails(context.params.id);
  return {
    props: {
      actorInfo,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
