import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(); 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-700">Oops! The page you're looking for doesn't exist.</p>
      {error ? (
        <p><i>{error.statusText || error.message}</i></p>
      ) : null}
      
      <Link to='/' className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
