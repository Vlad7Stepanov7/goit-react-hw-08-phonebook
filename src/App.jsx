
import Layout from "components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useAuth } from "hooks";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/operations";
import { RestrictedRoute } from "utils/RestrictedRoute";
import { PrivateRoute } from "utils/PrivateRoute";
import Register from "pages/Register/Register";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Contacts from "pages/Contacts/Contacts";
import Loader from "components/Loader/Loader";
import { Container } from '@mui/material';
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  

  return isRefreshing ? (
    <Loader/>
  ) : (
      <Container maxWidth="lg"
        sx={{ textAlign: "center" }}
      > 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
            <Route path="/register"
              element={<RestrictedRoute redirectTo="/contacts" component={<Register/>} />}
            />
            <Route path="/login"
              element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
            />
            <Route path="/contacts"
              element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
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
    </Container>)
};
   
 
