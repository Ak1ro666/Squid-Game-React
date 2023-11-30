import React from 'react';

import soliderImg from '../../../assets/images/soldier.png';

const Soldier = () => {
   return (
      <div className="absolute -bottom-12 -right-7">
         <img width={680} src={soliderImg} draggable={false} alt="solider" />
      </div>
   );
};

export default Soldier;
