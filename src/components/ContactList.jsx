import { useSelector } from 'react-redux';
import { deleteContact } from '../redux/actions';
import { useDispatch } from 'react-redux';

import styles from '../css/contactList.module.css';

export const ContactList = () => {
  let contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleDeleteOnClick = evt => {
    const parentNode = evt.target.parentNode;
    const id = parentNode.getAttribute('data-key');

    dispatch(deleteContact(id));
  };

  if (filter !== '') {
    contacts = contacts.filter(contact => contact.name.startsWith(filter));
  }

  return (
    <ul className={styles.contact_list}>
      {contacts.length > 0 &&
        contacts.map(contact => {
          return (
            <li key={contact.id} data-key={contact.id}>
              {contact.name} : {contact.number}
              <button className={styles.btn} onClick={handleDeleteOnClick}>
                Delete{' '}
              </button>
            </li>
          );
        })}
    </ul>
  );
};
