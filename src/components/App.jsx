import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export const App = () => {
  return (
    <div>
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className="contacts">
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
