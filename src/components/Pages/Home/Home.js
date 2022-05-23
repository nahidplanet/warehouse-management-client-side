import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button/Button';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Inventory></Inventory>
      <div className='flex justify-end md:mr-24 mr-14'>
        <Button>
          <Link to={'/manageproduct'}> Manage Product</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;