import { Link } from "react-router-dom";
import Error from "../../assets/404.jpg";

const ErrorPage = () => {
  return (
    <div className="container mx-auto px-10 py-6 md:flex items-center gap-4">
      <div className="md:w-1/3">
        <h2 className="text-7xl text-orange-600 font-bold">Page Not Found</h2>
        <Link to="/">
          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-xl font-semibold px-6 py-2 rounded-md mt-6">
            Back To Home
          </button>
        </Link>
      </div>
      <div className="md:w-2/3">
        <img src={Error} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default ErrorPage;
