import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const {_id ,name,desc,img,supplier,quantity,price} = product;
  const navigate = useNavigate()

  const updateStock = (id) =>{
    navigate(`/stockupdate/${id}`)
  }
  return (
    <div className=' border-1 rounded-sm border-[#D15A18]'>
      <div className=" flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded-lg bg-lightBlue-500">
        <img
          alt={name}
          src={img}
          className="w-full  rounded-t-lg"
        />
        <div className=" px-8 pb-8 pt-6">
          
          <h4 className="text-xl font-bold text-gray-800">
            {name}
          </h4>
          <p className="text-sm font-sm mt-2 text-gray-800">
            {desc}
          </p>
          <div className='flex justify-between text-md mt-2'>
            <p className='capitalize'><span className='font-semibold'>Supplier:</span> {supplier}</p>
            <p>Available ({quantity}) </p>
          </div>
          <div className='text-md mt-2'>
            <p className='font-bold text-[#D15A18]'>${price}</p>
          </div>
          <div onClick={()=>updateStock(_id)} className='mt-2'><button className='w-full bg-[#130F40] capitalize text-bold py-2 text-white rounded'>update Stock</button></div>
        </div>
      </div>
    </div>
  );
};

export default Product;