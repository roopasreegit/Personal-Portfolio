"use client"
import Image from "next/image";
import bg from "../../../../public/background/bg_about.jpg"
import Form from "@/components/contact/Form";



export default function Contact() {
  return (
    <>
      <Image src={bg} alt="Background Image"  className="w-full h-full -z-50 fixed top-0 left-0 object-cover object-center opacity-35" /> 

      <article className="relative w-full  flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="text-4xl text-amber-200 font-semibold text-center">
            Get in Touch!
          </h1>
          <p className="text-light text-gray-300 text-center">
            If you’ve made it this far, consider this an open doorway. Whether you want to build something ambitious, talk ideas, or just exchange thoughts about code, creativity, or ML models misbehaving at 3 AM - send a message my way. I’m always up for a good conversation and a new challenge. Let’s create something that feels a little magical.
          </p>

        </div>

        <Form />
      </article>
      
      
      
    </>
      
      
     
  
    
  );
}
