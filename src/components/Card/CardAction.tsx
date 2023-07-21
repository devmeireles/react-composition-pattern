import React, { ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardActionProps extends HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  icon: ElementType
}

const CardAction: React.FC<CardActionProps> = ({ onClick, icon: Icon, children, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={twMerge('card-action flex flex-row items-center justify-between py-4', props.className)}
    >
      <Icon className='text-3xl' />
    </button>
  )
}

export default CardAction