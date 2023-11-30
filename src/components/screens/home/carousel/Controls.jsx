import React from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';

const stylesButton = 'duration-300 ease-in-out transition-opacity';
const disabledButtonStyle = 'opacity-30 cursor-not-allowed';
const activeButtonStyle = 'opacity-90';

const Controls = ({ slidesLength, setCurrentIndex, currentIndex }) => {
   const isPrevDisabled = currentIndex === 0;
   const isNextDisabled = currentIndex === slidesLength - 1;

   const prevHandler = () => {
      !isPrevDisabled && setCurrentIndex((prev) => prev - 1);
   };

   const nextHandler = () => {
      !isNextDisabled && setCurrentIndex((prev) => prev + 1);
   };

   return (
      <div className="text-white">
         <button
            className={`${stylesButton} ${
               isPrevDisabled ? disabledButtonStyle : activeButtonStyle
            }`}
            onClick={prevHandler}>
            <HiChevronLeft size={26} />
         </button>
         <button
            className={`${stylesButton} ${
               isNextDisabled ? disabledButtonStyle : activeButtonStyle
            }`}
            onClick={nextHandler}>
            <HiChevronRight size={26} />
         </button>
      </div>
   );
};

export default Controls;
