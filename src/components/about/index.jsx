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
        <section className="w-full px-6 md:px-10 py-16">
            <div className="grid grid-cols-12 gap-5 max-w-7xl mx-auto">

                {/* About Me */}
                <ItemLayout className="col-span-12 lg:col-span-8 row-span-2 p-8 md:p-10
                    bg-slate-950/30 backdrop-blur-md
                    border border-white/10
                    rounded-3xl
                    hover:border-amber-200/20
                    transition-all duration-300">

                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-amber-200/60"></span>
                        <span className="text-xs uppercase tracking-[0.25em] text-amber-200/70">
                            About Me
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl text-amber-100 font-semibold mb-6">
                        Meet the alchemist behind the code
                    </h2>

                    <p className="text-sm md:text-base leading-7 text-slate-300/90 font-light">
                        Hey there, I'm Roopa, a Computer Science student at NIT Trichy.
                        I love building stuff and my interests lie in Backend Systems,
                        Cybersecurity, Machine Learning and AI. I read a lot of tech blogs articles and research papers to stay updated with the latest trends in the tech world and try to implement them in my projects.
                    </p>

                    <p className="text-sm md:text-base leading-7 text-slate-300/90 font-light mt-4">
                        Everything I build shows what I've learnt, what I'm learning
                        and what I'm heading towards. I learn something new every day
                        and believe in learning by doing.
                    </p>

                    <p className="text-sm md:text-base leading-7 text-slate-300/90 font-light mt-4">
                        When I'm not coding, you can find me curled up with a book,
                        running or flexing my non-existent biceps at the gym.
                        I'm always open to new opportunities and collaborations!
                        So feel free to reach out if you want to work together
                        or just chat about tech :p
                    </p>
                </ItemLayout>


                {/* NIT Trichy */}
                <ItemLayout className="col-span-12 sm:col-span-6 lg:col-span-4
                    p-7
                    bg-slate-950/30 backdrop-blur-md
                    border border-white/10
                    rounded-3xl
                    hover:border-amber-200/20
                    transition-all duration-300
                    flex flex-col justify-center">

                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
                        Currently
                    </span>

                    <p className="text-sm text-slate-300">
                        Final year student at
                    </p>

                    <p className="text-3xl md:text-4xl text-amber-100 font-semibold mt-1">
                        NIT Trichy
                    </p>

                    <div className="mt-5 h-px w-full bg-white/10"></div>

                    <p className="text-xs text-slate-300 mt-3">
                        B.Tech · Computer Science & Engineering
                    </p>
                </ItemLayout>


                {/* Oracle */}
                <ItemLayout className="col-span-12 sm:col-span-6 lg:col-span-4
                    p-7
                    bg-slate-950/30 backdrop-blur-md
                    border border-white/10
                    rounded-3xl
                    hover:border-amber-200/20
                    transition-all duration-300
                    flex flex-col justify-center">

                    <span className="text-xs uppercase tracking-[0.2em] text-slate-300 mb-3">
                        Experience
                    </span>

                    <p className="text-sm text-slate-300">
                        Summer Intern at
                    </p>

                    <p className="text-3xl md:text-4xl text-amber-100 font-semibold mt-1">
                        Oracle
                    </p>

                    <div className="mt-5 h-px w-full bg-white/10"></div>

                    <p className="text-xs text-slate-300 mt-3">
                        Database Cloud Ingestion Service · Zero Downtime Migration
                    </p>
                </ItemLayout>


                {/* Skills */}
                <ItemLayout className="col-span-12
                    p-7
                    bg-slate-950/20 backdrop-blur-md
                    border border-white/10
                    rounded-3xl
                    hover:border-amber-200/20
                    transition-all duration-300">

                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <span className="text-xs uppercase tracking-[0.2em] text-slate-200">
                                Toolkit
                            </span>

                            <h2 className="text-xl text-amber-100 font-semibold mt-1">
                                Things I build with
                            </h2>
                        </div>

                        <span className="hidden sm:block text-xs text-slate-300">
                            tools · frameworks · technologies
                        </span>
                    </div>

                    <div>
                        <img className="w-full" src="https://skillicons.dev/icons?i=html,css,react,bootstrap,threejs,tailwind,nextjs,nodejs,express,firebase,redis,mongodb,mysql,postman,pytorch,c,js,cpp,fastapi,tensorflow,vite,python,java,postgres,supabase&perline=13" alt="Roopasree's Skills" loading='lazy'/>
                    </div>
                </ItemLayout>


                {/* GitHub */}
                <ItemLayout className="col-span-12 lg:col-span-6
                    p-6
                    bg-slate-950/20 backdrop-blur-md
                    border border-white/10
                    rounded-3xl
                    hover:border-amber-200/20
                    transition-all duration-300">

                    <div className="flex items-center justify-between mb-5">
                        <div>
                            <span className="text-xs uppercase tracking-[0.2em] text-slate-200">
                                Open Source
                            </span>

                            <h2 className="text-xl text-amber-100 font-semibold mt-1">
                                GitHub Activity
                            </h2>
                        </div>

                        <span className="text-slate-300 text-sm">
                            ↗
                        </span>
                    </div>

                    <a
                        href="https://git.io/streak-stats"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="w-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                            src="https://github-readme-streak-stats.herokuapp.com?user=roopasreegit&theme=dark&hide_border=true&background=EB34B300&ring=FDE68A&currStreakLabel=FDE68A"
                            alt="GitHub Streak"
                            loading="lazy"
                        />
                    </a>
                </ItemLayout>


                {/* Currently Learning */}
                <ItemLayout className="col-span-12 lg:col-span-6
                    p-7
                    bg-slate-950/20 backdrop-blur-md
                    border border-white/10
                    rounded-3xl
                    hover:border-amber-200/20
                    transition-all duration-300">

                    <span className="text-xs uppercase tracking-[0.2em] text-slate-200">
                        Curiosity never ends
                    </span>

                    <h2 className="text-xl text-amber-100 font-semibold mt-1 mb-5">
                        Currently Learning
                    </h2>

                    <div className="grid grid-cols-2 gap-3">

                        <div className="flex items-center gap-3
                            p-3 rounded-xl
                            bg-white/[0.03]
                            border border-white/5">
                            <span className="text-amber-200">✦</span>
                            <span className="text-sm text-slate-300">
                                advanced ml
                            </span>
                        </div>

                        <div className="flex items-center gap-3
                            p-3 rounded-xl
                            bg-white/[0.03]
                            border border-white/5">
                            <span className="text-amber-200">✦</span>
                            <span className="text-sm text-slate-300">
                                cybersecurity
                            </span>
                        </div>

                        <div className="flex items-center gap-3
                            p-3 rounded-xl
                            bg-white/[0.03]
                            border border-white/5">
                            <span className="text-amber-200">✦</span>
                            <span className="text-sm text-slate-300">
                                agentic workflows
                            </span>
                        </div>

                        <div className="flex items-center gap-3
                            p-3 rounded-xl
                            bg-white/[0.03]
                            border border-white/5">
                            <span className="text-amber-200">✦</span>
                            <span className="text-sm text-slate-300">
                                how to touch grass
                            </span>
                        </div>

                    </div>
                </ItemLayout>

            </div>
        </section>
    )
}



export default AboutDetails