import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductdetails from '../../../hooks/useProductdetails';

const StockUpdate = () => {
  const { productId } = useParams({});
  console.log(productId);
  const [product, setProduct] = useProductdetails(productId);
  const { _id, name, desc, img, supplier, quantity, price } = product;

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
                <tr className=''>
                  <td className='pt-3  font-bold text-2xl capitalize align-top px-3 w-[200px]'>Product ID :</td>
                  <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 text-yellow-600'>{_id}</td>
                </tr>
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
                  <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 '>{price}</td>
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
                  <td className='pt-3  font-bold text-xl capitalize align-top px-3 w-[200px] '> :</td>
                  <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 '></td>
                </tr>
                <tr className=''>
                  <td className='pt-3  font-bold text-xl capitalize align-top px-3 w-[200px] '>Add Quantity</td>
                  <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 '>
                    <form action="">
                      <input className='text-md font-semibold px-3 py-2 w-full border' type="number" name="addQuantity" placeholder='Add Quantity' />
                      <br />
                      <button className='border mt-2 px-4 py-2 bg-[#130F40] text-white font-bold rounded-md'>Add</button>
                    </form>
                  </td>
                </tr>
                <tr className=''>
                  <td className='pt-3  font-bold text-xl capitalize align-middle px-3 w-[200px] '></td>
                  <td className='pt-3  text-lg font-semibold pl-3 align-top px-3 '>
                    <div>
                      <button className='border px-4 py-2 w-full bg-[#130F40] text-white font-bold rounded-md'>Deliverd</button>
                    </div>
                  </td>
                </tr>

              </table>

            </div>
            <div>

            </div>
          </div>
        </div>


      </section>
    </div>
  );
};

export default StockUpdate;

