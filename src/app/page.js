import Image from "next/image";
import bg from "../../public/background/home_bg3.jpg"
import MFModel from "@/components/models/MagicForest";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
  <main className="flex min-h-screen  flex-col items-center justify-between relative">
      <Image src={bg} alt="Background Image" fill className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" /> 

      <div className="w-full h-screen"> 
        {/* Navigation and 3D component*/}
        <Navigation />
        <RenderModel>
          <MFModel />
        </RenderModel>
      </div>
  </main>
    
  );
}
