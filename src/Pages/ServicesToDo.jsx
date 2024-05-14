import { useEffect, useState } from "react";
import ServicesToDoCard from "../Component/ServicesToDoCard";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ServicesToDo = () => {
  const { user } = useAuth();
  const [servicesToDo, setServicesToDo] = useState([]);
  const [statusUpdate, setStatusUpdate] = useState(false);
  const axiosSecure = useAxiosSecure();

  const url = `/servicesToDo/${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setServicesToDo(res.data);
    });
  }, [url, statusUpdate, axiosSecure]);

  return (
    <div>
      <Helmet>
        <title>ServicesToDo - MedConsultPro</title>
      </Helmet>
      <div className="flex justify-center items-center my-20">
      <div className="mt-5  space-y-5">
        {servicesToDo.length === 0 ? (
          <div className="text-3xl font-bold"> No bookings Services found for your account</div>
        ) : (
          servicesToDo.map((booking, index) => (
            <ServicesToDoCard
              key={index}
              booking={booking}
              statusUpdate={statusUpdate}
              setStatusUpdate={setStatusUpdate}
            />
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default ServicesToDo;
