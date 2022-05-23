import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const [success, setSuccess] = useState({});

  const nameRef = useRef('');
  const descRef = useRef('');
  const imgRef = useRef('');
  const priceRef = useRef('');
  const quantityRef = useRef('');
  const supplierRef = useRef('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const desc = descRef.current.value;
    const img = imgRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    const supplier = supplierRef.current.value;
    const newProduct = { name: name, desc: desc, img: img, price: price, quantity: quantity, supplier: supplier };

    const url = `http://localhost:5000/product`;
    const addItem =async () =>{
     await axios.post(url, newProduct)
      .then(result => {
        setSuccess(result.data);
      });
    }
    addItem();
    e.target.reset();
  }
  if (success.insertedId) {
    toast("Product Added")
  }
  return (
    <div className='mb-8 overflow-hidden my-10 md:p-10 shadow-xs w-8/12 md:w-6/12 mx-auto'>
      <h4 className="mb-4 text-3xl text-center font-bold text-gray-900">Add Product</h4>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-lg border">
        <form onSubmit={handleAddProduct}>
          {/* name  */}
          <div className='mb-3'>
            <label className="block text-md">
              <span className="text-gray-700 capitalize">Product Name</span>
              <input ref={nameRef} type='text' name='name'
                className="block w-full mt-1 px-3 py-2 rounded-md text-sm border focus:border-gray-800 focus:outline-none focus:shadow-outline-red form-input"
                placeholder="Product Name "
              />
            </label>
          </div>
          {/* Description  */}
          <div className='mb-3'>
            <label className="block text-md">
              <span className="text-gray-700 capitalize">Product Details</span>
              <textarea ref={descRef} cols="30" name='desc'
                className="block w-full mt-1 px-3 py-2 rounded-md text-sm border focus:border-gray-800 focus:outline-none focus:shadow-outline-red form-input"
                placeholder="Product Details "
              />
            </label>
          </div>
          {/* img  */}
          <div className='mb-3'>
            <label className="block text-md">
              <span className="text-gray-700 capitalize">Image Url</span>
              <input ref={imgRef} type='text' name='img'
                className="block w-full mt-1 px-3 py-2 rounded-md text-sm border focus:border-gray-800 focus:outline-none focus:shadow-outline-red form-input"
                placeholder="https://your_product_image_url.jpg"
              />
            </label>
          </div>
          {/* Price  */}
          <div className='mb-3'>
            <label className="block text-md">
              <span className="text-gray-700 capitalize">Product Price</span>
              <input ref={priceRef} type='number' name='price'
                className="block w-full mt-1 px-3 py-2 rounded-md text-sm border focus:border-gray-800 focus:outline-none focus:shadow-outline-red form-input"
                placeholder="Product Price "
              />
            </label>
          </div>
          {/* Quantity  */}
          <div className='mb-3'>
            <label className="block text-md">
              <span className="text-gray-700 capitalize">Product Quantity</span>
              <input ref={quantityRef} type='number' name='quantity'
                className="block w-full mt-1 px-3 py-2 rounded-md text-sm border focus:border-gray-800 focus:outline-none focus:shadow-outline-red form-input"
                placeholder="Product Quantity "
              />
            </label>
          </div>
          {/* Supplier  */}
          <div className='mb-3'>
            <label className="block text-md">
              <span className="text-gray-700 capitalize">Supplier Name</span>
              <input ref={supplierRef} type='text' name='supplier'
                className="block w-full mt-1 px-3 py-2 rounded-md text-sm border focus:border-gray-800 focus:outline-none focus:shadow-outline-red form-input"
                placeholder="Supplier Name "
              />
            </label>
          </div>
          {/* submit  */}
          <div className='mb-3 flex justify-end '>
            <input className='cursor-pointer border mt-2 px-6 py-2 hover:bg-[#130F40] bg-[#211c5a] text-white font-bold rounded-md' type="submit" value="Add" />

          </div>
        </form>

      </div>
    </div>
  );
};

export default AddProduct;

