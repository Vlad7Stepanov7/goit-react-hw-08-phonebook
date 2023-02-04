import LoginForm from "components/LoginForm/LoginForm";
import { Container } from "@mui/material";

const Login = () => {
    return (
        <Container
         sx={{
           pt: 5,
           mt: "200px",
          }}
        >
      <LoginForm />
    </Container>
    )
}

export default Login;