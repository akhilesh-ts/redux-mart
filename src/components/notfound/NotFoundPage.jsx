import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-8xl font-bold text-blue-900">404</h1>
      <h2 className="text-3xl font-semibold mt-4 text-gray-800">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
      >
        Go Back Home
      </Link>                                                                                                                                               

      <div className="mt-10">
        <img
          src="https://illustrations.popsy.co/gray/web-design.svg"
          alt="Not Found"
          className="w-80"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
