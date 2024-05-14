import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const {
    serviceName,
    description,
    price,
    imageURL,
    serviceArea,
    userImage,
    userName,
    _id,
  } = service;

  return (
    <div className="flex justify-center">
      {/* <!-- component --> */}
      <div className="max-w-5xl lg:flex">
        {/* Left section with image */}
        <div
          className="h-48 md:h-72 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${imageURL})` }}
          title="Woman holding a mug"
        ></div>

        {/* Right section with content */}
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            {/* Title */}
            <div className="text-black font-bold text-xl mb-2">
              {serviceName}
            </div>
            {/* Description */}
            <p className="text-grey-darker flex-grow text-base dark:text-gray-700 ">
              {description}
            </p>
            <div className="flex gap-10 mt-5">
              <p className="bg-yellow-100/60 text-yellow-500 px-3 py-1 rounded-full">
                {serviceArea}
              </p>
              <p className="bg-blue-100/60 text-blue-500 px-3 py-1 rounded-full">
                {price}
              </p>
            </div>
          </div>
          {/* Author information */}
          <div className="flex justify-between items-center">
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
                    scale: 1.2,
                    x: -15,
                  }}>
              <Link to={`/viewDetails/${_id}`}>
                <button
                  className="btn bg-[#3498db] hover:bg-[#65b6e9] flex-grow text-[#ffffff]"
                >
                  View Details
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
