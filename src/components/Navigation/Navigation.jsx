import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import { Button } from '@mui/material';
import { navLinkStyle } from "utils/NavLinkStyle";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

    return (
      <nav>
        <Button
          component={NavLink}
          to="/"
          sx={navLinkStyle}
        >
          Home
        </Button>

        {isLoggedIn && (
          <Button
            component={NavLink}
            to="/contacts"
            sx={navLinkStyle}
          >
            Contacts
          </Button>
          )}
    </nav>
    )
}

export default Navigation;