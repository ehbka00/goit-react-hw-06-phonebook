import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/actions';

import styles from '../css/contactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const { value: name } = event.target.elements[0];
    const { value: number } = event.target.elements[1];

    if (isContactDuplicate(name)) {
      alert(name + ' is already in contacts.');
      return;
    }

    dispatch(addContact(name, number));
    form.reset();
  };

  const isContactDuplicate = name => {
    return contacts.some(contact => contact.name === name);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <div className={styles.form_name}>
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div className={styles.form_number}>
          <label>Number</label>
          <input type="text" name="number" required />
        </div>

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </div>
    </form>
  );
};
