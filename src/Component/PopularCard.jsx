import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const PopularCard = ({ service }) => {
  const {
    serviceName,
    description,
    price,
    imageURL,
    userImage,
    userName,
    _id
  } = service;
  return (
    <div>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src={imageURL}
            alt="Consultant-image"
          />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {serviceName}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit mb-5">
            {description.slice(0, 100)}...
          </p>
          <p className="bg-blue-100/60 text-blue-500 px-3 py-1 w-16 rounded-full">
                {price}
              </p>
        </div>
        {/* Author information */}
        <div className="flex justify-between items-center px-4 py-4">
            <div className="flex items-center">
              {/* Author avatar */}
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={userImage}
                alt={userName}
              />
              <div className="text-sm">
                {/* Author name */}
                <p className="leading-none text-emerald-500 bg-emerald-100/60 px-3 py-1 rounded-full">
                  {userName}
                </p>
                {/* Date
            <p className="text-grey-dark">Aug 18</p> */}
              </div>
            </div>
            <motion.div whileHover={{
                    scale: 1.1,
                    x: -15,
                  }}>
              <Link to={`/viewDetails/${_id}`}>
              <button className="btn bg-[#3498db] hover:bg-[#65b6e9] flex-grow text-[#ffffff]">
                View Details
              </button>
              </Link>
            </motion.div>
          </div>
      </div>
    </div>
  );
};

export default PopularCard;
