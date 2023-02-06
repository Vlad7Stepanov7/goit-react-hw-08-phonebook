import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { useForm } from 'react-hook-form';
import { TextField, Box, Button } from '@mui/material';
import { formStyle, inputStyle, button } from 'utils/styles';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().min(7).max(20).email().required(),
    password: yup.string().required(),
}).required();

const LoginForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm({
       resolver: yupResolver(schema),
    });
    
    const onSubmit = ({ email, password }) => {
        dispatch(
            logIn({
                email,
                password
            })
        )
        reset();
    }
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
                variant="contained"
                sx={button}
             >
              Log In
            </Button>
        </Box>
    )
}

export default LoginForm;