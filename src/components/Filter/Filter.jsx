import { Label, Input } from 'components/Form/Form.styled';
import { FaFilter } from 'react-icons/fa';
export function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name <FaFilter />
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
}
