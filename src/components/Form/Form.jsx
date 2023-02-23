import { Component } from 'react';
import { Label, Input, FormStyled } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  render() {
    return (
      <div>
        <FormStyled onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              placeholder="Enter your name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </Label>
          <Label>
            Number
            <Input
              placeholder="Enter your number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleNameChange}
            />
          </Label>
          <button type="submit">Add contact</button>
        </FormStyled>
      </div>
    );
  }
}
