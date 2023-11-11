import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div >
                <Navbar />
            </div>

            {/* Outlet */}
            <div>
                <Outlet />
            </div>

        </div>
    );
};

export default MainLayout;