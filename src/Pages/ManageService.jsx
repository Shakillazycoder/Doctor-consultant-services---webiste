import { useEffect, useState } from "react";
import MySerVicesCard from "../Component/MyServicesCard";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageService = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [itemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [remaining, setRemaining] = useState(false);
  const axiosSecure = useAxiosSecure();

  // Fetch Services
  useEffect(() => {
    if (user?.email) {
      const url = `/manageService/${user.email}?page=${currentPage}&size=${itemPerPage}&sort=${sort}&search=${search}`;
      axiosSecure.get(url).then((res) => {
        setServices(res.data);
      }).catch((error) => {
        console.error("Error fetching services:", error);
      });
    }
  }, [axiosSecure, currentPage, itemPerPage, search, remaining, sort, user?.email]);

  // Fetch Count
  useEffect(() => {
    if (user?.email) {
      const url2 = `/manageService/${user.email}/count?&search=${search}`;
      axiosSecure.get(url2).then((res) => {
        setCount(res.data.count);
      }).catch((error) => {
        console.error("Error fetching count:", error);
      });
    }
  }, [axiosSecure, search, remaining, user?.email]);

  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()].map((page) => page + 1);

  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSort("");
    setSearch("");
    setSearchValue("");
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearch(searchValue);
  };

  return (
    <div>
      <Helmet>
        <title>Manage Service - MedConsultPro</title>
      </Helmet>
      <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
            <form onSubmit={handleSearchChange}>
              <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input
                  className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                  type="text"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  name="search"
                  placeholder="Enter Your Service Name"
                  aria-label="Enter Your Service Name"
                />
                <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                  Search
                </button>
              </div>
            </form>
            {/* sort */}
            <div>
              <select
                onChange={handleSortChange}
                name="sort"
                value={sort}
                id="sort"
                className="border bg-base-200 p-4 rounded-md"
              >
                <option value="">Sort By price</option>
                <option value="desc">Descending Order</option>
                <option value="asc">Ascending Order</option>
              </select>
            </div>
            {/* reset */}
            <button
              onClick={handleReset}
              className="btn bg-gray-200 text-gray-600"
            >
              Reset
            </button>
          </div>
          <div className="mt-5 space-y-5 items-center">
            {services.length === 0 ? (
              <div className="flex justify-center items-center h-96 text-3xl font-bold">
                No Services found for your account
              </div>
            ) : (
              services.map((service) => (
                <MySerVicesCard
                  key={service._id}
                  service={service}
                  remaining={remaining}
                  setRemaining={setRemaining}
                />
              ))
            )}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          {/* previous button */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePaginationButton(currentPage - 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500 hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="mx-1">previous</span>
            </div>
          </button>
          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationButton(btnNum)}
              key={btnNum}
              className={`hidden ${currentPage === btnNum ? "bg-blue-500 text-white" : ""} px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-blue-500 hover:text-white`}
            >
              {btnNum}
            </button>
          ))}
          {/* next button */}
          <button
            disabled={currentPage === numberOfPages}
            onClick={() => handlePaginationButton(currentPage + 1)}
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
