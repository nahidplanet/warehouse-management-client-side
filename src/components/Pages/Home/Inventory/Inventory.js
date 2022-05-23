import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import Product from '../Product/Product';

const Inventory = () => {
  const [products,setProducts] = useProducts();
  
  return (
    <div>
      <div className='p-10 grid grid-cols- sm:grid-cols-2 md:grid-cols-3 gap-10'>
      {
        products.map(product=> <Product key={product._id} product={product}></Product>)
      }
    </div>
    </div>
  );
};

export default Inventory;