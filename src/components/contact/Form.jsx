"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}
        className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
    >
      <input type="text" placeholder="Name" {...register("Name", {required: true})}
        className='w-full p-2 rounded-md shadow-lg focus:outline-none bg-white/10 border border-white/10 focus:ring-2 focus:ring-white/30 hover:shadow-[0_0_25px_rgba(255,215,130,0.4)] '
      />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
        className='w-full p-2 rounded-md shadow-lg focus:outline-none bg-white/10 border border-white/10 focus:ring-2 focus:ring-white/30 hover:shadow-[0_0_25px_rgba(255,215,130,0.4)] '
      />
      <textarea placeholder='Message'{...register("Message", {required: true, max: 256, min: 26})} 
        className='w-full p-2 rounded-md shadow-lg focus:outline-none bg-white/10 border border-white/10 focus:ring-2 focus:ring-white/30 hover:shadow-[0_0_25px_rgba(255,215,130,0.4)] '
      />

      <input type="submit" value="Cast Your Message!" className='px-10 py-4 rounded-md shadow-lg bg-black/70  hover:bg-black/80' />
    </form>
  );
}