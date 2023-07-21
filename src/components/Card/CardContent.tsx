import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
  title: string;
}

const CardContent: React.FC<CardContentProps> = ({ content, title, ...props }) => {
  return (
    <div {...props} className={twMerge('card-content flex flex-col items-center py-2', props.className)}>
      <h2 className='text-gray-950 text-2xl font-bold uppercase'>{title}</h2>
      <p className='text-justify pt-1'>{content}</p>
    </div>
  )
}

export default CardContent