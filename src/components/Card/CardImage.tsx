import React from 'react';

interface CardImageProps {
  source: string;
}

const CardImage: React.FC<CardImageProps> = ({ source }) => {
  return (
    <div className='card-image'>
      <img src={source} />
    </div>
  )
}

export default CardImage