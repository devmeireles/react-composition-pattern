import React, { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CardRoot: React.FC<CardRootProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge('card-root border-gray-500 border p-6', props.className)}
    >
      {children}
    </div>
  )
}

export default CardRoot