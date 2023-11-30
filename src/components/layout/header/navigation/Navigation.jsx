import React from 'react';

import { Link } from 'react-router-dom';

import { list } from './list';
import netflixLogoImage from '../../../../assets/images/netflix-logo.png';

const Navigation = () => {
   return (
      <ul className="list-none flex items-center">
         {list.map((title, idx) => (
            <li key={`${title} ${idx}`} className="inline-block px-4">
               {idx !== 2 ? (
                  <Link
                     to={`/${title.toLowerCase()}`}
                     className="block text-white opacity-80 hover:opacity-100 transition-all">
                     {title}
                  </Link>
               ) : (
                  <img
                     className="block mx-3"
                     width={35}
                     src={netflixLogoImage}
                     alt="logo"
                     draggable={false}
                  />
               )}
            </li>
         ))}
      </ul>
   );
};

export default Navigation;
