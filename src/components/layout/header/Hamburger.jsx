import React, { useState } from 'react';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Hamburger = () => {
   const [isShow, setIsShow] = useState(false);

   return (
      <div className="relative z-10">
         <button onClick={() => setIsShow(!isShow)}>
            <HiOutlineMenuAlt3 size={40} color="white" className="opacity-90" />
         </button>

         {isShow && (
            <ul
               className="absolute rounded-lg bg-white shadow-lg p-4 w-32 right-0"
               style={{
                  animation: 'opac 0.4s',
               }}>
               {Array(5)
                  .fill('')
                  .map((_, idx) => (
                     <li key={`Hamb ${idx}`}>
                        <Link to={'/'} className="block py-1 hover:text-purple-600 transition-all">
                           {`Item ${idx + 1}`}
                        </Link>
                     </li>
                  ))}
            </ul>
         )}
      </div>
   );
};

export default Hamburger;
