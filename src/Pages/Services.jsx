import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../Component/ServiceCard";

const Services = () => {
const [services, setServices] = useState([])

const url='http://localhost:3000/services'
 useEffect(() => {
  axios.get(url)
   .then(res => {
      console.log(res.data);
      setServices(res.data)
    })
 }, [url])


 console.log(services.length);


  return (
    <div>
      <h1>This is Services Page</h1>
      {
        services.map((service, index) => <ServiceCard key={index}></ServiceCard>)
      }
    </div>
  );
};

export default Services;
