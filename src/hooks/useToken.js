import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToken = (user) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const getAccesToken = async () => {

      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(`https://lit-temple-80083.herokuapp.com/access`, { email });
        localStorage.setItem("assessToken", data.accessToken);

        setToken(data.accessToken);

      }

    }
    getAccesToken();
  }, [user]);


  return [token];
};

export default useToken;