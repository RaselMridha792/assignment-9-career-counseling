import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <Helmet>
        <title>Error Page | Career Compass</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 rounded-lg shadow-lg bg-white">
          <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
          <p className="text-xl mt-4 text-gray-700">
            Something went wrong. Page Not found.
          </p>
          <div className="mt-6">
            <Link to="/" className="btn btn-neutral btn-lg mt-4">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
