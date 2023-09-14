import { Component } from 'react';

import {
  Container,
  Section,
  ContactForm,
  ContactList,
  FilterInput,
} from './components/index';

import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const CONTACTS_LOCAL_STORAGE_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // aktualizacja danych w state na podstawie danych w local storage
  componentDidMount() {
    const storedContacts = localStorage.getItem(CONTACTS_LOCAL_STORAGE_KEY);
    if (storedContacts && storedContacts !== 0) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  // aktualizacja danych w local storage przy update komponentu
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      this.updateLocalStorage(contacts);
    }

    if (contacts.length === 0) {
      localStorage.removeItem(CONTACTS_LOCAL_STORAGE_KEY);
    }
  }

  updateLocalStorage = contacts => {
    const serializedContacts = JSON.stringify(contacts);
    localStorage.setItem(CONTACTS_LOCAL_STORAGE_KEY, serializedContacts);
  };

  addNewContact = ({ name, number }) => {
    const existingContact = this.checkIfContactExists(name);

    if (!existingContact) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(
        prevState => ({
          contacts: [...prevState.contacts, newContact],
        }),
        () => {
          localStorage.setItem(
            CONTACTS_LOCAL_STORAGE_KEY,
            JSON.stringify(this.state.contacts)
          );
        }
      );

      Notiflix.Notify.success('Contact added successfully');
    } else {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    }
  };

  checkIfContactExists(name) {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }

  removeContact = id => {
    const removedContact = this.state.contacts.find(
      contact => contact.id === id
    );

    if (removedContact) {
      this.setState(state => ({
        contacts: state.contacts.filter(contact => contact.id !== id),
      }));

      localStorage.setItem(
        CONTACTS_LOCAL_STORAGE_KEY,
        JSON.stringify(this.state.contacts)
      );

      Notiflix.Notify.success(`${removedContact.name} has been removed`);
    }
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm handleAddNewContact={this.addNewContact} />

        <Section title="Contacts">
          <FilterInput value={filter} onChange={this.handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            handleDelete={this.removeContact}
          />
        </Section>
      </Container>
    );
  }
}
