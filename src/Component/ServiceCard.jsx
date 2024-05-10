const ServiceCard = ({ service }) => {
  const {
    serviceName,
    description,
    price,
    imageURL,
    serviceArea,
    userImage,
    userName,
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
            {/* Badge: Members only */}
            <p className="text-sm text-grey-dark  flex items-center">
              <svg
                className="text-grey w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            {/* Title */}
            <div className="text-black font-bold text-xl mb-2">
              {serviceName}
            </div>
            {/* Description */}
            <p className="text-grey-darker flex-grow text-base">
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
            <div>
              <button className="btn bg-[#3498db] flex-grow text-[#ffffff]">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
