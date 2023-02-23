import { Li, DeleteButton } from './ContactList.styled';
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
