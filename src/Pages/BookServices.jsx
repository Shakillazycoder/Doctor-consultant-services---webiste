import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingCard from "../Component/BookingCard";

const BookServices = () => {
    const {user} = useContext(AuthContext)
    const [bookings, SetBookings] = useState([])


    const url = `http://localhost:3000/booking/${user?.email}`;

    useEffect(() => {
        axios.get(url)
         .then((res) => {
            console.log(res.data);
            SetBookings(res.data)
          })
    }, [url])

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