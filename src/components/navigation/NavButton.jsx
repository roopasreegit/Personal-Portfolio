import React from 'react'
import Link from 'next/link';
import { Home, User, FolderOpen, Mail, FileText, Github, Linkedin, Code } from 'lucide-react';

const getIcon = (icon) => {
    switch(icon) {
        case "home":
            return <Home className='w-full h-auto' strokeWidth={1.5} />;
           
        case "user":
            return <User className='w-full h-auto' strokeWidth={1.5} />;
            
        case "folder-open":
            return <FolderOpen className='w-full h-auto' strokeWidth={1.5} />;
            
        case "envelope":
            return <Mail className='w-full h-auto' strokeWidth={1.5} />;
           
        case "file-alt":
            return <FileText className='w-full h-auto' strokeWidth={1.5} />;
            
        case "github":
            return <Github className='w-full h-auto' strokeWidth={1.5} />;
            
        case "linkedin":
            return <Linkedin className='w-full h-auto' strokeWidth={1.5} />;  
            
        case "code":
            return <Code className='w-full h-auto' strokeWidth={1.5} />;   
        default:
            return <Home className='w-full h-auto' strokeWidth={1.5} />;
    }
};

const NavButton = ({x, y, label, link, icon, newTab}) => {
  return (
    <div className='absolute cursor-pointer z-50 '
        style={{transform: `translate(${x}, ${y})`}}
    >
       <Link href={link} target={newTab ? "_blank" : "_self"} 
       className='text-fuchsia-100 rounded-full flex 
       items-center justify-center  
       backdrop-blur-xl 
        bg-white/10
        border border-white/10 
        shadow-[0_0_20px_rgba(0,0,0,0.2)]
       hover:bg-white/10 w-14 h-14   
        hover:shadow-[0_0_25px_rgba(255,215,130,0.4)]
        transition-all 
        duration-300' 
       aria-label={label} name={label}
    
       >
         <span className='relative peer w-14 h-14 p-4 '>
            {getIcon(icon)}
         </span>
         <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-white/15 backdrop-blur-md text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>
            {label}
         </span>
       </Link>
    </div>
  )
}

export default NavButton