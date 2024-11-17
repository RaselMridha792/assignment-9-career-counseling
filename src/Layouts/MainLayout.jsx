import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <>
        <div className="md:w-10/12 w-11/12 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
        </>
    );
};

export default MainLayout;