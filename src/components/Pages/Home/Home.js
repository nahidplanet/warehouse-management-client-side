import React from 'react';
import Button from '../../Shared/Button/Button';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';

const Home = () => {
  
  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <div className='flex justify-end md:mr-24 mr-14'>
        <Button></Button>
      </div>
    </div>
  );
};

export default Home;