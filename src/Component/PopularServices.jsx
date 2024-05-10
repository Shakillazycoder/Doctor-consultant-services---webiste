import axios from "axios";
import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [popularServices, setPopularServices] = useState([]);

  const url = "http://localhost:3000/popularServices";
  useEffect(() => {
    axios.get(url).then((res) => {
      setPopularServices(res.data);
    });
  }, []);

  return (
    <div>
      <div className="text-center text-5xl font-bold">
        <h1>Our Popular Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {popularServices.map((service, index) => (
          <PopularCard key={index} service={service}></PopularCard>
        ))}
      </div>
      <div className="flex justify-center items-center my-5">
       <Link to='/services'>
       <div>
        <button className="btn bg-[#3498db] flex-grow text-[#ffffff]">
          Show All
        </button>
        </div>
       </Link>
      </div>
    </div>
  );
};

export default PopularServices;
