import { Navbar } from "components/layout/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            
        </div>
    )
}