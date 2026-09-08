"use client"
import React from 'react'
import clsx from 'clsx';

const ItemLayout = ({ children, className }) => {
    return (
        <div
            className={clsx(
                ' flex flex-col items-center justify-center p-8 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,215,130,0.4)] transition-all',
                className
            )}
        >
            {children}
        </div>
    );
};

const AboutDetails = () => {
    return (
        <section className='w-full p-10 '>
            <div className='grid grid-cols-12 gap-8 w-full'>
                <ItemLayout className={'col-span-8 row-span-2'}>
                    <h2 className='text-slate-300 text-2xl text-left capitalize w-full font-semibold'>Meet the alchemist behind the code</h2>
                    <p className='font-light text-left text-gray-400 pt-8'>
                        I’m Roopa, a developer who enjoys building things that feel thoughtful, intuitive, and a little bit magical. I love exploring how ideas turn into real, working systems - whether it’s a clean UI, a full-stack flow, or an ML model learning something new. Web development, AI, and machine learning are the spaces where I’m constantly learning, experimenting, and finding new ways to grow. This portfolio is a small reflection of that journey, a place where curiosity meets creation, and where tech slowly starts to feel like wonder.
                    </p>
                 </ItemLayout>

                 <ItemLayout className={'col-span-4 text-amber-200'}>
                    <p className=' text-slate-300 flex justify-center items-center font-semibold w-full text-left'>Summer Intern at <sub className=' text-amber-200 font-semibold text-5xl ml-2'>Oracle</sub> </p>
                 </ItemLayout>

                 <ItemLayout className={'col-span-4 text-amber-200'}>
                    <p className=' text-slate-300 flex justify-center items-center font-semibold w-full text-left'>Hackathon Count:  <sub className=' text-amber-200 font-semibold text-5xl ml-2'>1</sub> </p>
                 </ItemLayout>

                {/* <ItemLayout className={'col-span-full'}>
                    <h2 className='text-2xl text-left text-amber-200 font-semi-bold capitalize w-full mb-6'>Frontend, Backend & Databases</h2>
                    <img className="w-full" src="https://skillicons.dev/icons?i=html,css,react,bootstrap,threejs,tailwind,nextjs,nodejs,express,firebase,redis,mongodb,mysql,postman" alt="Roopasree's Skills" loading='lazy'/>
                 </ItemLayout>

                 <ItemLayout className={'col-span-6 row-span-1'}>
                    <h2 className='text-2xl text-left text-amber-200 font-semi-bold capitalize w-full mb-6'>Programming Languages</h2>
                    <img className="w-full h-20" src="https://skillicons.dev/icons?i=js,c,cpp,py,ts" alt="Roopasree's Skills" loading='lazy'/>
                 </ItemLayout>

                  <ItemLayout className={'col-span-6 row-span-1'}>
                    <h2 className='text-2xl text-left text-amber-200 font-semi-bold capitalize w-full mb-6'>Tools</h2>
                    <img className="w-full" src="https://skillicons.dev/icons?i=figma,git,github,ps,tensorflow,unity,vscode" alt="Roopasree's Skills" loading='lazy'/>
                 </ItemLayout> */}

                 <ItemLayout className={'col-span-full'}>
                    <img className="w-full" src="https://skillicons.dev/icons?i=js,c,cpp,html,css,react,bootstrap,threejs,tailwind,nextjs,nodejs,express,firebase,redis,mongodb,mysql,postman,py,tensorflow,figma,ps,git,github,unity,vscode,vite" alt="Roopasree's Skills" loading='lazy'/>
                 </ItemLayout>

                <ItemLayout className={'col-span-6 p-0!'}>
                    <a href="https://git.io/streak-stats"><img src="https://github-readme-streak-stats.herokuapp.com?user=roopasreegit&theme=dark&hide_border=true&background=EB34B300&ring=FDE68A&currStreakLabel=FDE68A" alt="GitHub Streak " loading='lazy' /></a>
                </ItemLayout>

                <ItemLayout className={'col-span-6 '}>
                    <h2 className='text-2xl text-left  text-amber-200 font-semibold capitalize w-full mb-6'>Currently Learning</h2>
                    <ul className='list-disc  text-gray-300 font-light text-left'>
                        <li>Advanced Machine Learning Models</li>
                        <li>TypeScript</li>
                        <li>Generative AI</li>
                        <li>How to touch grass</li>
                    </ul>
                </ItemLayout>

                 

                

                 

            </div>
            
        </section>
    )
}

export default AboutDetails