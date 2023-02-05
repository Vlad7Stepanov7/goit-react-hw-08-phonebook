import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Box } from "@mui/material";
import Header from "components/Header/Header";

const Layout = () => {
    return (
        <Box sx={{
            backgroundColor: 'background.paper',
            minHeight: '100vh'
        }}>
            <Header />
             <Suspense>
               <Outlet/>
             </Suspense>   
        </Box>
    )
}

export default Layout;