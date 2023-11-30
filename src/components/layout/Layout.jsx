import React from 'react';

import BgImage from '../../assets/images/bg-squid-game.jpeg';
import Header from './header/Header';
import SocialMedia from './SocialMedia';
import Modal from '../screens/home/carousel/Modal';

const Layout = ({ children }) => {
   return (
      <div
         className="p-12 relative bg-cover bg-no-repeat"
         style={{
            backgroundImage: `url(${BgImage})`,
            backgroundPositionX: -200,
         }}>
         <div className="gradient" />
         <div className="relative" style={{ zIndex: 1, height: 'calc(100vh - 96px)' }}>
            <Header />
            <SocialMedia />
            <Modal />
            {children}
         </div>
      </div>
   );
};

export default Layout;
