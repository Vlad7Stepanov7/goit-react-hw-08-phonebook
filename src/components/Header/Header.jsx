import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import { useAuth } from "hooks";
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
    const { isLoggedIn } = useAuth();

    return (
        <AppBar position="static"
        sx={{backgroundColor: "#000"}}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
            <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </Toolbar>    
        </AppBar>
    )
}

export default Header;