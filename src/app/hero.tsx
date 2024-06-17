"use client";

import Image from "next/image";
import { Button, Typography, } from "@material-tailwind/react";
import Graph from "./grafic_prix";


function Hero() {
  return (
    <header className="">
      <div className=" w-full flex flex-col lg:flex-row  pt-12 pb-24">
        <div className=" landing_form w-full lg:w-2/3 flex flex-col items-center justify-center max-w-[800px] mx-auto">
          <Typography
            color="blue-gray"
            className="w-full text-[30px] lg:text-[48px] font-bold mb-4"
          >
            Votre expert en cheminées et poêles sur mesure
          </Typography>
          <Graph />
        </div>


        <div className=" w-full lg:w-1/3 flex flex-col items-center justify-center hidden lg:flex" style={{ marginTop: "80px" }}>
          <div className="relative h-96 w-full max-w-md lg:max-w-none lg:h-[55rem]" >
            <Image
              width={700}
              height={700}
              src="/image/realisations/img11.jpeg"
              alt="cheminée"
              className="image-landing rounded-full justify-center object-cover"
              style={{ objectFit: 'cover', }}
            />
          </div>
        </div>
      </div>
    </header >
  );
}


export default Hero;
