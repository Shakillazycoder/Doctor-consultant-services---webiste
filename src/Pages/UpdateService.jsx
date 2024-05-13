import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const UpdateService = () => {
  const { user } = useAuth();
  const service = useLoaderData();
  const axiosSecure = useAxiosSecure();


  const { serviceName, description, price, imageURL, serviceArea, _id } =
    service;

  const handleUpdateService = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const serviceName = formData.get("serviceName");
    const description = formData.get("description");
    const price = formData.get("price");
    const imageURL = formData.get("image");
    const serviceArea = formData.get("serviceArea");
    const updateService = {
      serviceName,
      description,
      price,
      imageURL,
      serviceArea,
      userName: user.displayName,
      userImage: user.photoURL,
      userEmail: user.email,
      createdAt: new Date(),
    };

    axiosSecure
      .put(`/updateService/${_id}`, updateService)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div className="bg-white text-black border md:border-4 rounded-lg shadow relative m-10">
          <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">Update Page</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="tourists-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <form onSubmit={handleUpdateService}>
              <div className="grid grid-cols-6 gap-6">
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
                    placeholder="General Consultation"
                    defaultValue={serviceName}
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
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
                    placeholder="$50"
                    defaultValue={price}
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
                    defaultValue={serviceArea}
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
                    placeholder="https://images.pexels.com/photos/3469505/pexels-photo-3469505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    defaultValue={imageURL}
                    required=""
                  />
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="6"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                    placeholder="Get a comprehensive consultation with our experienced doctors for any general health concerns."
                    defaultValue={description}
                  ></textarea>
                </div>
              </div>
              <div className=" pt-5 border-t border-gray-200 rounded-b">
                <button
                  className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Update Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
