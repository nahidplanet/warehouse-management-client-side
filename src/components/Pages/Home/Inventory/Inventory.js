import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import Product from '../Product/Product';

const Inventory = () => {
  const [products,setProducts] = useProducts();
  
  return (
    <div>
      <h1 className='text-center text-5xl my-5 text-[#130F40] font-bold uppercase'>Inventory</h1>
      <div className='p-10 grid grid-cols- sm:grid-cols-2 md:grid-cols-3 gap-10'>
      {
        products.slice(-6).map(product=> <Product key={product._id} product={product}></Product>)
      }
    </div>
    </div>
  );
};

export default Inventory;
