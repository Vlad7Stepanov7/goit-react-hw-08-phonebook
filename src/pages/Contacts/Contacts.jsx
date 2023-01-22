import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Loader from "components/Loader/Loader";
import { toast } from "react-toastify";
import { fetchContacts } from "redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectContacts, selectIsLoading, selectError } from "redux/contacts/selectors";

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
        <div>
        <ContactForm contacts={contacts} />
        <Filter /> 
        <h2>Contact</h2>
      {isLoader && <Loader/>}
      {isError && notificationError(isError)}
      {isShow && <ContactList contacts={contacts}/>}  
      </div>
  )
}

export default Contacts;