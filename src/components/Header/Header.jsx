import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import ThemeToggler from "components/ThemeToggle/ThemeToggle";
import { useAuth } from "hooks";
import { AppBar, Toolbar, Box } from '@mui/material';

const Header = () => {
    const { isLoggedIn } = useAuth();

    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                <Navigation />
                <ThemeToggler/>
            </Box>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
                
            </Toolbar>    
        </AppBar>
    )
}

export default Header;