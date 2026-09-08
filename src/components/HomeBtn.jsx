import React from 'react'
import Link from 'next/link';
import { Home } from 'lucide-react';

const HomeBtn = () => {
  return (
    <Link href={"/"} target={ "_self"} 
       className='text-fuchsia-100 rounded-full z-50
       
       
       
       
       flex items-center justify-center backdrop-blur-xl bg-white/10 border border-white/10 
        shadow-[0_0_20px_rgba(0,0,0,0.2)]
       hover:bg-white/10 w-14 h-14   
        hover:shadow-[0_0_25px_rgba(255,215,130,0.4)]
        transition-all 
        fixed top-4 left-4 self-start
        duration-300' 
       aria-label={"home"} name={"home"}
    
       >
         <span className='relative peer w-14 h-14 p-4 '>
            <Home className='w-full h-auto' strokeWidth={1.5} />    
         </span>
         <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-white/15 backdrop-blur-md text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>
            Home
         </span>
       </Link>
  )
}

export default HomeBtn