import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://lit-temple-80083.herokuapp.com/product`;
    axios.get(url)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return [products, setProducts];
};

export default useProducts;