import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';
import { navLinkStyle } from "utils/NavLinkStyle";

const AuthNav = () => {
    

    return (
        <div>
            <Button component={NavLink}
                to="/register"
                sx={navLinkStyle}
            >
                Register
            </Button>
            <Button component={NavLink}
                to="/login"
                sx={navLinkStyle}
            >
               Log In
            </Button>
        </div>
    )
}

export default AuthNav;