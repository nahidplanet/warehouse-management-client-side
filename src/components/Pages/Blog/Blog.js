import React from 'react';

const Blog = () => {
  return (
    <div className=' p-10 gap-10 grid md:grid-cols-2'>
      <div class="mb-8">
        <div class="min-w-0 p-4 text-white rounded-lg shadow-xs bg-[#122A35]">
          <h4 class="text-2xl mb-4 font-semibold text-gray-400 ">
            Difference between javascript and nodejs:
          </h4>
          <div
            class="flex text-xl justify-center mt-4 space-x-3  text-white  ">
            Javascript is a scripting language which is used for making dynamic HTML webpages. Every browser has javascript engine (chrome: v8, firefox: spider monkey, safari: JS core) which helps us to run the code. We can only run it on browser and thus it is called client side or frontend development.
            On the other hand, Node JS is a runtime environment which helps javascript to run outside the browser. That's why we use it for server-side. it has v8 engine which is capable in parsing and running javascript behind the door. Commonly used node js modules are express, next and lodash.

          </div>
        </div>
      </div>
      <div class="mb-8">
        <div class="min-w-0 p-4 text-white rounded-lg shadow-xs bg-[#122A35]">
          <h4 class="text-2xl mb-4 font-semibold text-gray-400 ">
            When should we use nodejs and mongodb:
          </h4>
          <div
            class="flex text-xl justify-center mt-4 space-x-3  text-white  ">
            Every programming language needs a runtime environment/library which leads to compile and intrepret the code. So, we need to create a server for making various operations we will use node js for javascript language because nodeJS has a runtime environment for JS, thus it can interpret the code easily.
            And mongodb helps us to store different data which would be shown in the client side. Additionally, it leads us to making query and showing data in the web page based on users' choice. In simpler way, when we will need to store and maintain data, we have to use database like mongodb.

          </div>
        </div>
      </div>
      <div class="mb-8">
        <div class="min-w-0 p-4 text-white rounded-lg shadow-xs bg-[#122A35]">
          <h4 class="text-2xl mb-4 font-semibold text-gray-400 ">
            Difference between SQL and noSQL databases:
          </h4>
          <div
            class="flex text-xl justify-center mt-4 space-x-3  text-white  ">
            SQL is a structured query languages and it requires predefined schemas which shapes the data we enter. SQL usually is used when we have complex queries. Since it is table based and each table has a relation with another so, it is also called RDMS or relational database managment system.
            NoSQL database is not structured and it can store dynamic schemas. The data is stored based on key-value pairs, document based, graph database or wide-column stores. However, usually we avoids noSQL for complex queries.

          </div>
        </div>
      </div>
      <div class="mb-8">
        <div class="min-w-0 p-4 text-white rounded-lg shadow-xs bg-[#122A35]">
          <h4 class="text-2xl mb-4 font-semibold text-gray-400 ">
            The purpose of jwt and how does it work:
          </h4>
          <div
            class="flex text-xl justify-center mt-4 space-x-3  text-white  ">
            JWT or Json Web Token is an open standard securely transmitting information between two parties. It has three parts: Header, Payload and Signature. Header contains token, payload has claims and signature ensures the token hasn't been altered. We use jwt for ensuring the authenticity of the data.
            When a user logs in the application with email and password the server confirms the identity and sends a token containing reference. The client then includes this token on every request to the server. Since jwt is lightweight and stateless, it doesn't require client or server to maintain sessions.

          </div>
        </div>
      </div>













    </div>
  );
};

export default Blog;