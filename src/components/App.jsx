import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { AiFillPhone } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const filterNormalize = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    return this.state.contacts.find(contact => contact.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.addContact(data);
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1>
          Phonebook <AiFillPhone />
        </h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>
          Contacts <IoMdContacts />
        </h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleContacts()}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
