import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { useForm } from 'react-hook-form';
import { TextField, Box, Button } from '@mui/material';
import { formStyle, inputStyle, button } from 'utils/styles';

const LoginForm = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
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