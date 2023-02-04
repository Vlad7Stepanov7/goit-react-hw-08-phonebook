import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "components/Header/Header";

const Layout = () => {
    return (
        <div>
            <Header />
            <Suspense>
             <Outlet/>
            </Suspense>   
        </div>
    )
}

export default Layout;