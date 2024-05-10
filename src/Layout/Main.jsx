import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Main = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="container mx-auto px-4">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;