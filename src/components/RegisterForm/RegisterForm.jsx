import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';
import { TextField, Box, Button } from '@mui/material';
import { formStyle, inputStyle } from 'utils/FormStyle';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: '',
            password: '',
            email: ''
        }
  });
  
  const onSubmit = ({name, password, email}) => {
    console.log(name, password, email);
    dispatch(
      registerUser({
        name,
        email,
        password,
      })
    );
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={formStyle}
    >
      
        <TextField
          type="text" {...register('name')}
          id="Username"
          label="Username"
          sx={inputStyle}
        />
        <TextField
          type="email" {...register('email')}
          id="email"
          label="email"
          sx={inputStyle}
        />
        <TextField
          type="password" {...register('password')}
          id="password"
          label="password"
          sx={inputStyle}
        />
      <Button
        type="submit"
        sx={{
          color: "#000",
          fontSize: "24px"
        }}
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;

