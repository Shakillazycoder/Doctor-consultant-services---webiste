import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
});

const useAxiosSecure = () => {
  const { SignOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          SignOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    );
  }, [SignOutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
