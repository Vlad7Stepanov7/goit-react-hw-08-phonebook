
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';

const ContactList = ({contacts}) => {
  const dispatch = useDispatch();
  
  const filterValue = useSelector(state => state.filter.filter);
  
  const filterContacts = filterValue === "" ? contacts :
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase())
    });
    
     return (
       <List>
         {filterContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <ListItemText>{name}: {number}</ListItemText>
            <ListItemButton type="button" onClick={() => dispatch(deleteContact(id))}>Delete</ListItemButton>
          </ListItem>
        )
       })}
       </List>
    );
   }

export default ContactList;
