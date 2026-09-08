"use client"
import Image from "next/image";
import bg from "../../../../public/background/about_bg.jpg"
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/MagicStaff";



export default function Home() {
  return (
    <>
    <Image src={bg} alt="Background Image"  className="w-full h-full -z-50 fixed top-0 left-0 object-cover object-center opacity-35" /> 

      
      <ProjectList projects={projectsData}/>
      
      <div className="flex items-center justify-center fixed top-20 left-0 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
      
      
     
  
    
  );
}
