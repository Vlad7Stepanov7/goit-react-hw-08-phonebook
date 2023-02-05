import { useEffect,
         lazy,
         useState,
         useMemo,
} from "react";
import Layout from "components/Layout/Layout";
import Loader from "components/Loader/Loader";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks";
import { useSelector } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { RestrictedRoute } from "utils/RestrictedRoute";
import { PrivateRoute } from "utils/PrivateRoute";
import { Container, Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const HomePage = lazy(() => import("./pages/Home"));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));
const ContactsPage = lazy(() => import('./pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const [mode, setMode] = useState('light');

  const darkMode = useSelector(state => state.theme.darkMode);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  useMemo(() => {
    if (darkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [darkMode]);

   const theme = useMemo(() =>
      createTheme({
        palette: {
          mode,
        },
      }),
      [mode]);
  
  return isRefreshing ? (
    <Loader/>
  ) : (
      <ThemeProvider theme={theme}>
      <Container maxWidth="lg" > 
        <Box
           sx={{
          textAlign: "center",
          height: "100vh",
        }}
        >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
            <Route path="/register"
              element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>} />}
            />
            <Route path="/login"
              element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
            />
            <Route path="/contacts"
              element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
            />
        </Route>
      </Routes>
      
      <ToastContainer
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="colored"
          />
        </Box>
        </Container>
      </ThemeProvider>
    )
};
   
 
