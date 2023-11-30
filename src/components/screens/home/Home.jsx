import React from 'react';
import Layout from '../../layout/Layout';
import Content from './Content';
import Details from './Details';
import Soldier from './Soldier';
import Carousel from './carousel/Carousel';

const Home = () => {
   return (
      <Layout>
         <Content />
         <Carousel />
         <Soldier />
         <Details />
      </Layout>
   );
};

export default Home;
