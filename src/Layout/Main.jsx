import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Main = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;