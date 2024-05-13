import { useEffect, useState } from "react";
import BookingCard from "../Component/BookingCard";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const BookServices = () => {
  const { user } = useAuth();
  const [bookings, SetBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/booking/${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      SetBookings(res.data);
    });
  }, [url, axiosSecure]);

  return (
    <div>
      <div className="mt-5 container mx-auto space-y-5 items-center my-20">
        {bookings.length === 0
          ? <div className="text-3xl flex justify-center items-center h-96 font-bold"> No bookings found for your account</div>
          : bookings.map((booking, index) => (
              <BookingCard key={index} booking={booking} />
            ))}
      </div>
    </div>
  );
};

export default BookServices;
