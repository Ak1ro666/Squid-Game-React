import React, { useState } from 'react';
import Controls from './Controls';
import VideosLine from './videosLine/VideosLine';

import t1Img from '../../../../assets/images/thumbnails/thumbnail-1.jpg';
import t2Img from '../../../../assets/images/thumbnails/thumbnail-2.jpeg';
import t3Img from '../../../../assets/images/thumbnails/thumbnail-3.jpeg';
import t4Img from '../../../../assets/images/thumbnails/thumbnail-4.jpeg';
import t5Img from '../../../../assets/images/thumbnails/thumbnail-5.jpeg';

const initialSlides = [
   {
      _id: 'wef2we',
      thumbnailPath: t1Img,
      videoUrl: 'https://www.youtube.com/watch?v=oqxAJKy0ii4',
   },
   {
      _id: '123fqw',
      thumbnailPath: t2Img,
      videoUrl: 'https://www.youtube.com/watch?v=iAFqS8uxImo',
   },
   {
      _id: '43gsw',
      thumbnailPath: t3Img,
      videoUrl: 'https://www.youtube.com/watch?v=Ch0RwN424Ns',
   },
   {
      _id: '53uyi5k',
      thumbnailPath: t4Img,
      videoUrl: 'https://www.youtube.com/watch?v=k98IihPUl6Q',
   },
   {
      _id: 'w*#fgr',
      thumbnailPath: t5Img,
      videoUrl: 'https://www.youtube.com/watch?v=HGcPu8qdqL4',
   },
];

const Carousel = () => {
   const [slides] = useState(initialSlides);
   const [currentIndex, setCurrentIndex] = useState(0);

   return (
      <div className="mt-24">
         <div className="flex items-center mb-5">
            <div className=" text-white opacity-90 text-lg font-medium mr-20">1 series</div>
            <Controls
               slidesLength={slides.length}
               setCurrentIndex={setCurrentIndex}
               currentIndex={currentIndex}
            />
         </div>
         <VideosLine
            slides={slides}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
         />
      </div>
   );
};

export default Carousel;
