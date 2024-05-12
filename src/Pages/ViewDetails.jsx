import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const ViewDetails = () => {
  const services = useLoaderData();
  console.log(services);
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleBooking = (e) => {
    e.preventDefault();
    if (user?.email === services.userEmail) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Oops...",
        text: "You cannot book your own service!",
      });
      return;
    }
    const formData = new FormData(e.target);
    const serviceName = formData.get("serviceName");
    const serviceId = formData.get("serviceId");
    const price = formData.get("price");
    const imageURL = formData.get("image");
    const serviceArea = formData.get("serviceArea");
    const providerName = formData.get("providerName");
    const providerEmail = formData.get("providerEmail");
    const userName = formData.get("userName");
    const userEmail = formData.get("userEmail");
    const serviceDate = startDate;
    const servicesStatus = "pending";
    const bookingService = {
      serviceName,
      serviceId,
      price,
      imageURL,
      serviceArea,
      serviceDate,
      providerName,
      providerEmail,
      userName,
      userEmail,
      servicesStatus,
    };
    console.table(bookingService);

    axiosSecure.post("/booking", bookingService).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Service Booked Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/bookServices");
    });
  };

  return (
    <div className="dark:bg-white ">
      <div className=" bg-white lg:p-10 my-20">
        {/* Service Provider information */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mt-5">
            <img src={services.userImage} className="rounded-full" alt="" />
          </div>
          <div className="text-2xl font-semibold">
            <h2>{services.userName}</h2>
            <p>{services.serviceArea}</p>
          </div>
        </div>
        {/* Single Service Section */}
        <div>
          <div className="flex justify-center my-20">
            {/* <!-- component --> */}
            <div className="max-w-5xl lg:flex">
              {/* Left section with image */}
              <div
                className="h-48 md:h-72 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: `url(${services.imageURL})` }}
                title="Woman holding a mug"
              ></div>

              {/* Right section with content */}
              <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  {/* Title */}
                  <div className="text-black font-bold text-xl mb-2">
                    {services.serviceName}
                  </div>
                  {/* Description */}
                  <p className="text-grey-darker flex-grow text-base dark:text-gray-700">
                    {services.description}
                  </p>
                  <div className="flex gap-10 mt-5">
                    <p className="bg-yellow-100/60 text-yellow-500 px-3 py-1 rounded-full">
                      {services.serviceArea}
                    </p>
                    <p className="bg-blue-100/60 text-blue-500 px-3 py-1 rounded-full">
                      {services.price}
                    </p>
                  </div>
                </div>
                {/* Author information */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {/* Author avatar */}
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src={services.userImage}
                      alt={services.userName}
                    />
                    <div className="text-sm">
                      {/* Author name */}
                      <p className="leading-none text-emerald-500 bg-emerald-100/60 px-3 py-1 rounded-full">
                        {services.userName}
                      </p>
                      {/* Date
            <p className="text-grey-dark">Aug 18</p> */}
                    </div>
                  </div>
                  <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn bg-[#3498db] text-[#ffff]"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      Book Now
                    </button>
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        {/* form section */}
                        <form onSubmit={handleBooking}>
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="serviceId"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                Service Id
                              </label>
                              <input
                                type="text"
                                name="serviceId"
                                id="serviceId"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={services._id}
                                placeholder="General Consultation"
                                required=""
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="serviceName"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                Service Name
                              </label>
                              <input
                                type="text"
                                name="serviceName"
                                id="serviceName"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={services.serviceName}
                                placeholder="General Consultant"
                                required=""
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="serviceArea"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                Service Area
                              </label>
                              <input
                                type="text"
                                name="serviceArea"
                                id="serviceArea"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder="New York, NY"
                                defaultValue={services.serviceArea}
                                required=""
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="image"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                imageURL
                              </label>
                              <input
                                type="text"
                                name="image"
                                id="image"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={services.imageURL}
                                placeholder="https://images.pexels.com/photos/3469505/pexels-photo-3469505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                required=""
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="providerName"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                Provider Name
                              </label>
                              <input
                                type="text"
                                name="providerName"
                                id="providerName"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={services.userName}
                                placeholder={services.userName}
                                required=""
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="providerEmail"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                Provider Email
                              </label>
                              <input
                                type="text"
                                name="providerEmail"
                                id="providerEmail"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={services.userEmail}
                                placeholder={services.userEmail}
                                required=""
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="userEmail"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                Current User Email
                              </label>
                              <input
                                type="text"
                                name="userEmail"
                                id="userEmail"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={user.email}
                                required=""
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="userName"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                Current User Name
                              </label>
                              <input
                                type="text"
                                name="userName"
                                id="userName"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={user.displayName}
                                required=""
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3 mb-2">
                              <label
                                htmlFor="price"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                Price
                              </label>
                              <input
                                type="text"
                                name="price"
                                id="price"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                value={services.price}
                                required=""
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="serviceDate"
                                className="text-sm font-medium text-gray-900 block mb-2"
                              >
                                Service Date
                              </label>
                              <DatePicker
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                              />
                            </div>
                          </div>
                          <div className=" pt-5 border-t border-gray-200 rounded-b">
                            <button
                              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                              type="submit"
                            >
                              Booking
                            </button>
                          </div>
                        </form>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
