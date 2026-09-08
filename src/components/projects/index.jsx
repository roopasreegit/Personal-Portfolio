import React from 'react'
import ProjectLayout from './ProjectLayout'

const ProjectList = ({projects}) => {
  return (
    <div className=' w-full max-w-2xl space-y-8 mt-8 flex flex-col items-center '>
      <div className=' grid grid-cols-2 max-w-3xl gap-4'>
        {projects.map((project, index) => {
          return <ProjectLayout 
            key={index}
            {...project}
          />   
        })}
        {/* Can also be written as return <ProjectLayout {...project} /> */}
     </div>
    </div>
    
  )
}

export default ProjectList