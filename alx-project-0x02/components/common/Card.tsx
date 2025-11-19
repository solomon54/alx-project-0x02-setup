import React from 'react';
import { type CardProps } from '@/interfaces/index';
export default function Card({title, content}:CardProps){
    return(
        <div className='flex gap-5 m-10 bg-amber-200 w-2/3 justify-center items-center h-50'>
            <h1 className='text-blue-500  text-center m-4 shadow-2xl rounded-2xl'>{title}</h1>
            <p className='font-semibold text-center'>{content}</p>
        </div>
    )
}