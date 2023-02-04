import RegisterForm from "components/RegisterForm/RegisterForm";
import { Container } from "@mui/material";

const Register = () => {
  return (
    <Container
      sx={{
        pt: 5,
        mt: "200px",
      }}
    >
      <RegisterForm />
    </Container>
  );
}

export default Register;