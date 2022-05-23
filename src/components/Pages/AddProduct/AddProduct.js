import React from 'react';

const AddProduct = () => {
  return (
    <div className='mb-8 overflow-hidden my-10 p-10 shadow-xs w-6/12 mx-auto'>
      
<h4
  class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
>
  Validation
</h4>
<div
  class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
>
  <label class="block text-sm">
    <span class="text-gray-700 dark:text-gray-400">
      Invalid input
    </span>
    <input
      class="block w-full mt-1 text-sm border-red-600 dark:text-gray-300 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red form-input"
      placeholder="Jane Doe"
    />
    <span class="text-xs text-red-600 dark:text-red-400">
      Your password is too short.
    </span>
  </label>

  <label class="block mt-4 text-sm">
    <span class="text-gray-700 dark:text-gray-400">
      Valid input
    </span>
    <input
      class="block w-full mt-1 text-sm border-green-600 dark:text-gray-300 dark:bg-gray-700 focus:border-green-400 focus:outline-none focus:shadow-outline-green form-input"
      placeholder="Jane Doe"
    />
    <span class="text-xs text-green-600 dark:text-green-400">
      Your password is strong.
    </span>
  </label>

  <label class="block mt-4 text-sm">
    <span class="text-gray-700 dark:text-gray-400">
      Helper text
    </span>
    <input
      class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
      placeholder="Jane Doe"
    />
    <span class="text-xs text-gray-600 dark:text-gray-400">
      Your password must be at least 6 characters long.
    </span>
  </label>
</div>
    </div>
  );
};

export default AddProduct;

