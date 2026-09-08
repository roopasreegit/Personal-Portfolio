"use client"
import Image from "next/image";
import bg from "../../../../public/background/about.jpg"

import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import Hat from "@/components/models/Hat";



export default function Home() {
  return (
    <>
    <Image src={bg} alt="Background Image"  className="w-full h-full -z-50 fixed top-0 left-0 object-cover object-center opacity-40" /> 

      
      
      
      <div className="absolute top-1/2 -translate-y-1/2 left-0 h-screen w-full">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col justify-center items-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-x-1/2">
          <h1 className="font-bold text-9xl text-amber-200">Roopasree</h1>
          <p className="font-light text-gray-400 mt-3">Shaping solutions, one semicolon at a time</p>
        </div>
      </div>

      <AboutDetails />
      
    </>
      
      
     
  
    
  );
}
