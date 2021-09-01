import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './redux/actions';
import shortid from 'shortid';
import ContactForm from './components/contactForm';
import Filter from './components/filter';
import ContactList from './components/contactList';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'filter':
        dispatch(actions.filterContacts(value));
        break;
      default:
        console.error();
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleAppend = () => {
    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }
    dispatch(actions.addContact({ name, number }));
    reset();
  };

  const getFilterContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };
  const deletContact = contactId => {
    dispatch(actions.deleteContact(contactId));
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm
        name={name}
        number={number}
        onChange={handleChange}
        onHandleAppend={handleAppend}
        nameId={nameInputId}
        numberId={numberInputId}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleChange} />
      <ContactList contacts={getFilterContacts()} onDelete={deletContact} />
    </div>
  );
}
