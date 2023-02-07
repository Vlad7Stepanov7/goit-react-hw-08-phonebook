import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { TextField, Box, Button, Typography } from '@mui/material';
import { button, formStyle, inputStyle } from 'utils/styles';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
    name: yup.string().required(),
    number: yup.number().required(),
}).required();

const ContactForm = ({contacts}) => {
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
            p={4}
            mb={5}
            mx="auto"
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
            <Typography 
              variant='body1' 
              component="span"
              sx={{color: "text.primary"}}
            >
            {errors.name?.message}
            </Typography>

            <TextField
                type="tel" {...register("number")}
                id="Number"
                label="Numbere"
                sx={inputStyle}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
               />
            <Typography 
              variant='body1' 
              component="span"
              sx={{color: "text.primary"}}
            >
            {errors.number?.message}
            </Typography>
            <Button
                type="submit"
                 sx={button}
            >
                Add contact
            </Button>
            </Box>
    )
}

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired
}
export default ContactForm;