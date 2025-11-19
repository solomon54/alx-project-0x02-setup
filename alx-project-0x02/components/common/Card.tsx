import React from 'react';
import { type CardProps } from '@/interfaces/index';
export default function Card({title, content}:CardProps){
    return(
        <div className='font-semibold shadow-amber-50'>
            <h1 className='text-blue-500 '>{title}</h1>
            <p>{content}</p>
        </div>
    )
}