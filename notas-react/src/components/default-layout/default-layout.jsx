import { Outlet } from "react-router-dom";
import Header from "../header/header.jsx";

const DefaultLayout = ()=>{
    return(
        <div className="DefaultLayout">
            <Header />
            <Outlet />
        </div> 
    );
} 
export default DefaultLayout;