import React, { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CardActions: React.FC<CardActionsProps> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge('card-actions flex flex-row justify-evenly py-2', props.className)}
    >
      {children}
    </div>
  )
}

export default CardActions