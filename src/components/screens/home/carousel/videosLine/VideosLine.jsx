import React from 'react';
import VideoItem from './VideoItem';
import { useModal } from '../../../../ModalProvider';

const VideosLine = ({ slides, currentIndex, setCurrentIndex }) => {
   const { setVideoUrl } = useModal();

   const playHandler = (index, videoUrl) => {
      setCurrentIndex(index);
      setVideoUrl(videoUrl);
   };

   const count = currentIndex * 192;

   return (
      <div
         className="flex items-end h-32 transition-all"
         style={{
            transform: currentIndex ? `translateX(-${count}px)` : '',
         }}>
         {slides.map((el, index) => {
            const isActive = index === currentIndex;
            return (
               <VideoItem
                  key={el._id}
                  slide={el}
                  clickHandler={() => playHandler(index, el.videoUrl)}
                  isActive={isActive}
               />
            );
         })}
      </div>
   );
};

export default VideosLine;
