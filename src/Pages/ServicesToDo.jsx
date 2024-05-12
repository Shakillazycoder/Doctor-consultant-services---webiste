import { useEffect, useState } from "react";
import ServicesToDoCard from "../Component/ServicesToDoCard";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const ServicesToDo = () => {
  const { user } = useAuth();
  const [servicesToDo, setServicesToDo] = useState([]);
  const [statusUpdate, setStatusUpdate] = useState(false);
  const axiosSecure = useAxiosSecure()

  const url = `/servicesToDo/${user?.email}`;
  console.log(url);
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      console.log(res.data);
      setServicesToDo(res.data);
    });
  }, [url, statusUpdate, axiosSecure]);
  console.log(servicesToDo.length);
  return (
    <div className="flex justify-center items-center my-20">
      <div className="mt-5  space-y-5">
        {servicesToDo.map((booking, index) => (
          <ServicesToDoCard
            key={index}
            booking={booking}
            statusUpdate={statusUpdate}
            setStatusUpdate={setStatusUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesToDo;
