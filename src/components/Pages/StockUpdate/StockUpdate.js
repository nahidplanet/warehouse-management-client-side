import axios from 'axios';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductdetails from '../../../hooks/useProductdetails';
import Button from '../../Shared/Button/Button'

const StockUpdate = () => {
  const { productId } = useParams({});
  const [product, setProduct] = useProductdetails(productId);
  const { _id, name, desc, img, supplier, quantity, price } = product;

  const handleValueDecrease = () => {
    const updateQuantity = parseInt(quantity) -1;
    const url = `http://localhost:5000/product?updateid=${_id}&value=${updateQuantity}`;
    const updatQuantity = async () => {
      await axios.put(url)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .then(error => {
          console.log(error);
        })
    }
    updatQuantity();
  }

  const handleAddQuantity = (e) => {
    e.preventDefault();
    const newQuantity = parseInt(e.target.addQuantity.value);
    const updateQuantity = newQuantity + parseInt(quantity);
    const url = `http://localhost:5000/product?updateid=${_id}&value=${updateQuantity}`;
    const updatQuantity = async () => {
      await axios.put(url)
        .then(res => {
          console.log(res);
          if (res.data.acknowledged == true) {
            
          }
        })
        .then(error => {
          console.log(error);
        })
    }
    updatQuantity();

  }

  return (
    <div>
      <section className="md:flex items-center mx-auto w-11/12 m-10">
        <div className='md:w-6/12 '>
          <div className='w-full border rounded-md'>
            <div className=" h-[350px] md:h-[500px] w-10/12 mx-auto p-10 ">
              <img
                className="mx-auto w-full h-full rounded-lg"
                alt={name}
                src={img}
              />
            </div>
          </div>
        </div>

        <div className=" md:w-6/12  flex justify-center items-center">
          <div className="w-full  ">
            <div className=' p-10 '>
              <table className='table-auto '>
                <thead>
                  <tr className=''>
                    <td className='pt-3  font-bold text-2xl capitalize align-top px-3 w-[200px]'>Product ID :</td>
                    <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 text-yellow-600'>{_id}</td>
                  </tr>
                </thead>

                <tbody>
                  <tr className=''>
                    <td className='pt-3  font-bold text-xl capitalize align-top px-3 w-[200px] '>Name :</td>
                    <td className='pt-3  text-lg font-semibold pl-3 align-top px-3'>{name}</td>
                  </tr>
                  <tr className=''>
                    <td className='pt-3  font-bold text-xl capitalize align-top px-3 w-[200px] '>Information :</td>
                    <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 '>{desc}</td>
                  </tr>
                  <tr className=''>
                    <td className='pt-3  font-bold text-xl capitalize align-top px-3 w-[200px] '>price :</td>
                    <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 '>${price}</td>
                  </tr>
                  <tr className=''>
                    <td className='pt-3  font-bold text-xl capitalize align-top px-3 w-[200px] '>quantity :</td>
                    <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 '>{quantity}</td>
                  </tr>
                  <tr className=''>
                    <td className='pt-3  font-bold text-xl capitalize align-top px-3 w-[200px] '>supplier :</td>
                    <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 '>{supplier}</td>
                  </tr>
                  <tr className=''>
                    <td className='pt-3  font-bold text-xl capitalize align-top px-3 w-[200px] '></td>
                    <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 '></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className=''>
                    <td className='pt-3  font-bold text-xl capitalize align-top px-3 w-[200px] '>Add Quantity</td>
                    <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 '>
                      <form onSubmit={handleAddQuantity}>
                        <input className='text-md font-semibold px-3 py-2 w-full border' type="number" name="addQuantity" placeholder='Add Quantity' />
                        <br />
                        <input type="submit" className='border mt-2 px-6 py-2 hover:bg-[#130F40] bg-[#211c5a] text-white font-bold rounded-md' value="Add" />
                      </form>
                    </td>
                  </tr>
                  <tr className=''>
                    <td className='pt-3  font-bold text-xl capitalize align-middle px-3 w-[200px] '></td>
                    <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 '>
                      <div>
                        <button onClick={handleValueDecrease} className='border px-4 py-2 w-full hover:bg-[#D15A18] bg-[#b65826] text-white font-bold rounded-md'>Deliverd</button>
                      </div>
                    </td>
                  </tr>
                </tfoot>

              </table>

            </div>
            <div>

            </div>
          </div>
        </div>


      </section>
      <div className='flex justify-end pr-10'>
        <Button>
          <Link to={'/manageproduct'}> Manage Product</Link>
        </Button>
      </div>
    </div>
  );
};

export default StockUpdate;

