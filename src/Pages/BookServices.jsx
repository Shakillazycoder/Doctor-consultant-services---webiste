import {useEffect, useState } from "react";
import BookingCard from "../Component/BookingCard";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const BookServices = () => {
    const {user} = useAuth()
    const [bookings, SetBookings] = useState([])
    const axiosSecure = useAxiosSecure()


    const url = `/booking/${user?.email}`;

    useEffect(() => {
      axiosSecure.get(url)
         .then((res) => {
            console.log(res.data);
            SetBookings(res.data)
          })
    }, [url, axiosSecure])

    return (
        <div>
            <div className="mt-5 container mx-auto space-y-5 items-center my-20">
            {bookings.map((booking, index) => (
              <BookingCard key={index} booking={booking} />
            ))}
          </div>
        </div>
    );
};

export default BookServices;