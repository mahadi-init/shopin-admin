import { getCookie } from 'cookies-next';
import React from 'react';
import { Navigate } from 'react-router-dom';

const addProduct = () => {

    const authToken = getCookie("auth-token") as string;

  if (!authToken) {
    return <Navigate to="/login" replace={true} />;
  }

    return (
        <div>
            add product
        </div>
    );
};

export default addProduct;