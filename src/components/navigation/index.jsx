"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton';

const Navigation = () => {

  const angleIncrement=360/BtnList.length;

  return (
    <div className='w-full fixed h-screen flex items-center justify-center'>
        <div className='flex items-center justify-between relative'>
         {
            BtnList.map((btn,index) => {

                const angleRad = (angleIncrement * index) * (Math.PI / 180);
                const radius = 'calc(22.5vw - 1rem)';
                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                return <NavButton key={index} x={x} y={y} {...btn} />
                
               {/* <button key={index} className='absolute'
                    style={{ transform: `translate(${x}, ${y})`}}
                    
                >
                    {btn.label}
                </button> */}
            })
         }
        </div>
    </div>
    
  )
}

export default Navigation