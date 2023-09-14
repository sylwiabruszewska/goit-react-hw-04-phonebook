import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './ContactForm.styled';

import { Button } from '../index';
import { Input } from '../index';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = ({ inputName, inputValue }) => {
    this.setState({ [inputName]: inputValue });
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.handleAddNewContact({
      name: this.state.name,
      number: this.state.number,
    });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name"
            value={name}
            onChange={this.onChange}
            required
          />
        </label>

        <label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Number"
            value={number}
            onChange={this.onChange}
            required
          />
        </label>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  handleAddNewContact: PropTypes.func.isRequired,
};
