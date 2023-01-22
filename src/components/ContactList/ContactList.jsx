
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = ({contacts}) => {
  const dispatch = useDispatch();
  
  const filterValue = useSelector(state => state.filter.filter);
  
  const filterContacts = filterValue === "" ? contacts :
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase())
    });
    
     return (
       <ul>
         {filterContacts.map(({ id, name, number }) => {
        return (
          <ul key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </ul>
        )
       })}
       </ul>
    );
   }

export default ContactList;
