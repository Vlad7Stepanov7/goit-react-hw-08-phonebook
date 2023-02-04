import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Loader from "components/Loader/Loader";
import { toast } from "react-toastify";
import { fetchContacts } from "redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectContacts, selectIsLoading, selectError } from "redux/contacts/selectors";
import { Box, Typography } from "@mui/material";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const isShow = contacts && !isError && !isLoading;
  const isLoader = isLoading;

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
   
    const notificationError = error => {
      console.log(error);
      toast.error("Sorry, error")
    };
    
    return (
      <Box
        sx={{
        pt: 5,
        mt: "100px",
        }}
      >
        <ContactForm contacts={contacts} />
        <Filter /> 
        <Typography variant="h3" component="h2">
          Contacts
        </Typography>
      {isLoader && <Loader/>}
      {isError && notificationError(isError)}
      {isShow && <ContactList contacts={contacts}/>}  
      </Box>
  )
}

export default Contacts;