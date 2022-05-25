
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import useProducts from '../../../hooks/useProducts'
import ManageProductRow from '../ManageProductRow/ManageProductRow';
import {  useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ManageProduct = () => {
  const [success,setSuccess] = useState(0);
  const [products, setProducts] = useProducts();
  const handleDeletProduct = (id) =>{
    const agree = window.confirm("Are you sure to delete?");
    if (agree) {
      const deletItem = async () => {
        const url = `https://lit-temple-80083.herokuapp.com/product/${id}`;
        await axios.delete(url)
        .then(result => {
          setSuccess(result.data.deletedCount);
          if (result.data.deletedCount === 1) {
            const rest =  products.filter(product=> product._id !== id);
            setProducts(rest);
          }
        })
        .then(error=>{
          console.log(error);
        })
      }
      deletItem();
    }
    }
 if (success === 1) {
    toast("Product Deleted");
 }
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
               products.map(product=><ManageProductRow key={product._id} product={product} deleteid={handleDeletProduct}></ManageProductRow>)
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
                    aria-label="Previous"
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
                    aria-label="Next"
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

export default ManageProduct;