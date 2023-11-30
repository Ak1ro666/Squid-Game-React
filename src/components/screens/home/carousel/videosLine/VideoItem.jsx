import React from 'react';
import PlayButton from './PlayButton';

const VideoItem = ({ slide, isActive, clickHandler }) => {
   return (
      <button
         onClick={clickHandler}
         className={`relative block mr-8 transition-all ${isActive ? 'w-52 h-full' : 'w-40 h-24'}`}>
         {isActive && <PlayButton />}
         <div
            className={`bg-cover bg-no-repeat bg-center h-full ${
               isActive ? 'filter grayscale' : ''
            }`}
            style={{ backgroundImage: `url(${slide.thumbnailPath})` }}
         />
      </button>
   );
};

export default VideoItem;
