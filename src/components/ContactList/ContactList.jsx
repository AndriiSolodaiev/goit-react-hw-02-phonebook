import { Li, DeleteButton } from './ContactList.styled';
import PropTypes from 'prop-types';

export function ContactList({ contacts, removeContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Li key={id}>
          {name}: {number}
          <DeleteButton type="button" onClick={() => removeContact(id)}>
            Delete
          </DeleteButton>
        </Li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
  removeContact: PropTypes.func.isRequired,
};
