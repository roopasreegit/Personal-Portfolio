import React from 'react'
import Image from 'next/image'

const ProjectLayout = ({ name, description, image, demolink }) => {
  return (
    <div 
      className="
        group 
        p-5 
        rounded-2xl 
        backdrop-blur-xl 
        bg-white/5 
        border border-white/10 
        shadow-[0_0_20px_rgba(0,0,0,0.2)]
       
        overflow-hidden
      "
    >
      
      {/* Image */}
      <div className="relative w-full h-35 mb-4 rounded-xl overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-fill group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-white drop-shadow-sm mb-1">
        {name}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-3">
        {description}
      </p>

      {/* Link */}
      <div className="flex justify-center">
        <a 
        href={demolink} 
        target="_blank"
        className=" 
          text-sm 
          text-amber-100 
          group-hover:text-amber-200
          transition
        "
      >
        View on GitHub →
      </a>
      </div>
      

    </div>
  )
}

export default ProjectLayout
