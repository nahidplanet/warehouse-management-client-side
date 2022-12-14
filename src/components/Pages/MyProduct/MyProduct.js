
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase/firebase.init';
import MyProductRows from '../MyProductRows/MyProductRows';

const MyProduct = () => {
  const [user] = useAuthState(auth);
  const [myProduct, setMyProduct] = useState([]);
  const [success, setSuccess] = useState(0);
  
  useEffect(() => {
    const getMyProduct = async () => {
      const email = user?.email;
      const url = `https://lit-temple-80083.herokuapp.com/myproduct?email=${email}`;
      try {
        const { data } = await axios.get(url,{
          headers:{
            authorization:`Bearer ${localStorage.getItem('localToken')}`
          }
        });
        setMyProduct(data);
      } catch (error) {
        
      }
      
    }
    getMyProduct();

  }, [user]);
  const handleDeletProduct = (id) => {
    const agree = window.confirm("Are you sure to delete?");
    if (agree) {
      const deletItem = async () => {
        const url = `https://lit-temple-80083.herokuapp.com/product/${id}`;
        await axios.delete(url)
          .then(result => {
            setSuccess(result.data.deletedCount);
            if (result.data.deletedCount === 1) {
              const rest = myProduct.filter(product => product._id !== id);
              setMyProduct(rest);

            }
          })
          .then(error => {
            console.log(error);
          })
      }
      deletItem();
    }
  }
  if (success === 1) {
    toast("Product Deleted");
  }
  console.log(myProduct);
  return (
    <div>
      <h1 className='text-center text-gray-900 text-3xl font-bold capitalize mt-10'>all product list</h1>
      <div className="w-full mb-8 overflow-hidden  my-10 p-10 shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr
                className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b  bg-gray-50  "
              >
                <th className="px-4 py-3">Product Name</th>
                <th className="px-4 py-3">Product Id</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Manage</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y ">
              {
                myProduct.length < 1 ?
                  <tr >
                    <td className='py-10'>
                    <h1 className='align-center  text-center text-red-700 font-bold text-2xl md:text-6xl'>No data found</h1>
                      <p className='align-center mt-3 font-bold text-md  text-center text-green-700'>if you get your own product, please login with email and password</p>
                    </td>
                    
                  </tr>
                  :
                  myProduct.map(product => <MyProductRows key={product._id} product={product} deleteMyProduct={handleDeletProduct}></MyProductRows>)
              }
            </tbody>
          </table>
        </div>
        <div
          className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t "
        >
          <span className="flex items-center col-span-3">
            Showing 21-30 of 100
          </span>
          <span className="col-span-2"></span>
          {/* <!-- Pagination --> */}
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"

                  >
                    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>

                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                  >
                    1
                  </button>
                </li>

                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"

                  >
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>

                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;