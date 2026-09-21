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

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div className="absolute z-50 cursor-pointer" style={{ transform: `translate(${x}, ${y})` }}>
      <Link href={link} target={newTab ? "_blank" : "_self"} aria-label={label} className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#17132b]/65 text-fuchsia-100 shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 hover:border-[#ffe9a6]/30 hover:bg-[#211b3b]/75 hover:shadow-[0_0_22px_rgba(255,225,150,0.12)]">
        {/* <span className="pointer-events-none absolute inset-[-1px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,rgba(255,226,150,0.05)_320deg,rgba(255,235,180,0.75)_345deg,rgba(255,246,210,0.2)_355deg,transparent_360deg)] opacity-70 animate-spin-slow" /> */}
        {/* <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[#17132b]/90" /> */}
        <span className="relative z-10 h-14 w-14 p-4 transition-all duration-300 group-hover:text-[#fff1c7] group-hover:drop-shadow-[0_0_6px_rgba(255,225,150,0.35)]">
          {getIcon(icon)}
        </span>
        <span className="absolute left-full top-1/2 ml-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#17132b]/80  opacity-80 px-2.5 py-1 text-sm text-[#f5e9cf] shadow-lg backdrop-blur-md group-hover:block">
          {label}
        </span>
      </Link>
    </div>
  );
};



export default NavButton