import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useProductdetails = (id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    axios.get(url)
      .then(res => {
        setProduct(res.data);
      });
  }, [])


  return [product, setProduct];
};

export default useProductdetails;