import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { TextField, Box, Button } from '@mui/material';
import { formStyle, inputStyle } from 'utils/FormStyle';

const ContactForm = ({contacts}) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm({
    defaultValues: {
        name: '',
        number: ''
    }});
    
    const onSubmit = values => {
        const { name, number } = values;

        const isContact = contacts.find(contact => (
                contact.name === name ||
                contact.number === number
        ));

        if (isContact) {
            toast.warning("There is already a contact or a number");
            reset();
            return; 
        }

        dispatch(addContact({name, number}))
        reset();
    }
    
   
    
    return (
       
        <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={formStyle}
    >
           
                <TextField  
                type="text" {...register("name")}
                id="Name"
                label="Name"
                sx={inputStyle}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            
                <TextField
                    
                    type="tel" {...register("number")}
                     id="Number"
                label="Numbere"
                sx={inputStyle}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
               />
            
            <Button
        type="submit"
        sx={{
          color: "#000",
          fontSize: "24px"
        }}
            >
                Add contact
            </Button>
            </Box>
    )
}

export default ContactForm;