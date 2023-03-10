import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';
import { TextField, Box, Button, Typography } from '@mui/material';
import { formStyle, inputStyle, button } from 'utils/styles';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().min(7).required(),
    email: yup.string().min(7).email().required(),
    password: yup.string().min(7).required(),
}).required();

const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  
  const onSubmit = ({name, password, email}) => {
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
      p={4}
      mb={5}
      mx="auto"
    >
      
        <TextField
          type="text" {...register('name')}
          id="Username"
          label="Username"
          sx={inputStyle}
      />
      <Typography 
        variant='body1' 
        component="span"
        sx={{color: "text.primary"}}
      >
        {errors.name?.message}
      </Typography>
        <TextField
          type="email" {...register('email')}
          id="email"
          label="email"
          sx={inputStyle}
      />
      <Typography 
        variant='body1' 
        component="span"
        sx={{color: "text.primary"}}
      >
        {errors.email?.message}
      </Typography>
        <TextField
          type="password" {...register('password')}
          id="password"
          label="password"
          sx={inputStyle}
      />
      <Typography 
        variant='body1' 
        component="span"
        sx={{color: "text.primary"}}
      >
        {errors.password?.message}
      </Typography>
      <Button
        type="submit"
        variant="contained"
        sx={button}
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterForm;

