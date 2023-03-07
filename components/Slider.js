import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import giver from "../services/CarouselGiver";
import Link from "next/link";

export default function Slider(props) {
  const { info } = props;
  let carouselPictures = giver(info);
  return (
    <div className="relative mt-2 shadow-2xl w-full h-full ">
      <Carousel stopOnHover={true} autoPlay infiniteLoop showStatus={false} showThumbs={false} showIndicators={false}>
        {carouselPictures.map((data, index) => {
          return (
            <div key={index}>
              <Link href={`./movies/${data.id}`}>
                <div className=" w-full h-full absolute flex justify-start items-end pl-10 pb-6 ">
                  <p className="text-xs  xs:text-2xl bg-black px-3 py-2 opacity-80 rounded-md ">{data.title}</p>
                </div>

                <img src={data.img} alt="blabla" className="max-h-[500px] max-w-[1280px] object-cover object-top cursor-pointer" id={data.id}></img>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
