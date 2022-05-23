import React from 'react';

const ManageProductRow = ({product,deleteid}) => {
  const { _id, name, img, supplier, quantity } = product;
// const handleDeleteProduct = (id) =>{
//   console.log(id);
// }
  return (
    <tr className="text-gray-700 ">
      <td className="px-4 py-3">
        <div className="flex items-center text-md">
          {/* <!-- Avatar with inset shadow --> */}
          <div
            className="relative hidden w-8 h-8 mr-3 rounded-full md:block"
          >
            <img
              className="object-cover w-full h-full rounded-full"
              src={img}
              alt=""
              loading="lazy"
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="font-semibold text-[#130F40]">{name}</p>
            <p className="text-xs text-[#130F40] ">
              {supplier}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-md text-[#130F40]">
        {_id}
      </td>
      <td className="px-4 py-3 text-md text-[#130F40]">
        {quantity}
      </td>
      <td className="px-4 py-3 text-xs">
        <button onClick={()=>deleteid(_id)} type='button'
          className="px-2 py-1 font-semibold leading-tight text-white bg-red-500 rounded-full "
        >
          Delete
          
        </button>
      </td>

    </tr>
  );
};

export default ManageProductRow;