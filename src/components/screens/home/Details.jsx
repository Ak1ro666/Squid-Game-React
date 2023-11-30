import React from 'react';

const detailsStyles = {
   borderRight: '2px solid rgba(255, 255, 255, .3)',
};

const Details = () => {
   return (
      <div className='absolute right-1 bottom-0 flex items-center text-white font-bold text-md'>
         <div className="pr-2" style={detailsStyles}>
            2021
         </div>
         <div className="px-2" style={detailsStyles}>
            1 SEASON
         </div>
         <div className="pl-2" style={detailsStyles}>
            <span className="bg-white text-black rounded-sm px-2 py-1 mr-2">IMDb</span>
						<span>9.5</span>
         </div>
      </div>
   );
};

export default Details;
