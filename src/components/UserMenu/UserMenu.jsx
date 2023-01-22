import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { Button, Typography } from "@mui/material";
import { navLinkStyle } from "utils/NavLinkStyle";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
       <div>
            <Typography
                variant="body1"
                component="p"
                sx={{
                    color: "#eaf003",
                    mt: "5px"
                }}
            >
                Welcome, {user.name}
            </Typography>
            <Button 
                type="button"
                sx={navLinkStyle}
                onClick={() => dispatch(logOut())}>
                Logout
            </Button>
       </div>
    )
}

export default UserMenu;