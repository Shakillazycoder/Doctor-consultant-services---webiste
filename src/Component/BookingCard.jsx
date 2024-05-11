const BookingCard = ({ booking }) => {
  const {
    serviceName,
    price,
    imageURL,
    serviceArea,
    providerName,
    providerEmail,
    userName,
    userEmail,
    servicesStatus,
    serviceDate,
    _id,
  } = booking;

  return (
    <div className="flex container mx-auto justify-center">
      {/* <!-- component --> */}
      <div className="w-full  md:max-w-7xl lg:flex">
        {/* Left section with image */}
        <div
          className="h-48 md:h-72 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${imageURL})` }}
          title="Woman holding a mug"
        ></div>

        {/* Provider section with content */}
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="space-y-4">
              <p className="text-2xl font-bold">Provider Information</p>
              <p className="text-sm text-grey-dark  flex items-center">{_id}</p>
            </div>
            {/* Title */}
            <div className="text-black font-bold text-xl mt-2 mb-2">
              {serviceName}
            </div>
            <div className="flex gap-10 mt-5">
              <p className="bg-pink-100/60 text-pink-500 px-3 py-1 rounded-full">
                {serviceArea}
              </p>
              <p className="bg-blue-100/60 text-blue-500 px-3 py-1 rounded-full">
                {price}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-10">
              <p className=" text-emerald-500 bg-emerald-100/60 px-3 py-1 rounded-full">
                {providerName}
              </p>
              <p className="bg-blue-100/60 text-blue-500 px-3 py-1 rounded-full">
                {providerEmail}
              </p>
            </div>
          </div>
        </div>
        {/* User section with content */}
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
          <div className="mb-4">
              <p className="text-2xl font-bold">User Information</p>
            </div>
            {/* Title */}
            <div className="text-black font-bold text-xl mb-2">
              {userEmail}
            </div>
            {/* Description */}
            <p className="text-grey-darker flex-grow text-base">
              {userName}
            </p>
            <div className="flex gap-10 mt-5">
              <p className=" text-emerald-500 bg-emerald-100/60  px-3 py-1 rounded-full">
              {new Date(serviceDate).toLocaleDateString()}
              </p>
            </div>
            <div>
                <div className="flex gap-10 mt-10">
                  <p className=" bg-yellow-100/60 text-yellow-500 px-3 py-1 rounded-full">
                    {servicesStatus}
                  </p>
                </div>
    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
