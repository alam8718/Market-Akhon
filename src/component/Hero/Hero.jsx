import React from "react";
import WomanImage from "../../img/woman_hero.png";
import {Link} from "react-router-dom";

function Hero() {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 ">
      <div className="container mx-auto h-full flex justify-around">
        <div className="flex flex-col justify-center">
          <div className="uppercase font-semibold flex items-center">
            <h1 className="w-10 bg-red-500 h-[2px] mr-3"></h1>New Trends
          </div>
          <h1 className="uppercase text-[70px] font-light leading-[1.1] mb-4 ">
            Authum sale stylish <br />
            <span className="font-semibold">Womens</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary">
            Discover More
          </Link>
        </div>
        <div>
          <img src={WomanImage} className="hidden lg:block" alt="hero photo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
