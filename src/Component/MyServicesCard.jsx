import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySerVicesCard = ({ service, remaining, setRemaining }) => {

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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://server-site-vert.vercel.app/deleteService/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            setRemaining(!remaining);
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Something went wrong",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }).catch((error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong",
            text: error.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    });
  };

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
            <p className="text-gray-600 flex-grow text-base">
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
              <div className="flex items-center gap-x-6">
                <button
                  onClick={() => handleDelete(_id)}
                  className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>

                <Link
                  to={`/updateService/${_id}`}
                  className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySerVicesCard;
