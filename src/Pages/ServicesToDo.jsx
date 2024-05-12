import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import ServicesToDoCard from "../Component/ServicesToDoCard";

const ServicesToDo = () => {
  const { user } = useContext(AuthContext);
  const [servicesToDo, setServicesToDo] = useState([]);
  const [statusUpdate, setStatusUpdate] = useState(false);

  const url = `http://localhost:3000/servicesToDo/${user?.email}`;
  console.log(url);
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setServicesToDo(res.data);
    });
  }, [url, statusUpdate]);
  console.log(servicesToDo.length);
  return (
    <div>
      <div className="mt-5 container mx-auto space-y-5 items-center my-20">
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
