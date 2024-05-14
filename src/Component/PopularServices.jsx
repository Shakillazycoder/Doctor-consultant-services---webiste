import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import { Link } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Fade } from "react-awesome-reveal";


const PopularServices = () => {
  const [popularServices, setPopularServices] = useState([]);
  const axiosSecure = useAxiosSecure()

  const url = "/popularServices";
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setPopularServices(res.data);
    });
  }, [axiosSecure]);

  return (
    <div className="my-20">
      <div className="text-center text-5xl mb-10 font-bold">
        <h1>Our Popular Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-1,0">
        {popularServices.map((service, index) => (
          <Fade key={index} direction="up" delay={index * 100} cascade={false} triggerOnce={true}>
          <PopularCard key={index} service={service}></PopularCard></Fade>
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
