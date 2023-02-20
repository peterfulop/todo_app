import { FC } from 'react';
import { Form } from 'react-bootstrap';
import { MainSelectOption } from '../../../types';

interface IMainSelect {
  options: MainSelectOption[];
  id?: string;
  name?: string;
  value?: string | number | readonly string[];
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

export const MainSelect: FC<IMainSelect> = ({
  id,
  name,
  options,
  value,
  disabled,
  onChange,
}) => {
  return (
    <Form.Select
      name={name}
      id={id}
      defaultValue={value}
      onChange={onChange}
      onClick={(e) => e.stopPropagation()}
      disabled={disabled}
    >
      {options.map((value, key) => (
        <option key={key} value={value.value}>
          {value.content}
        </option>
      ))}
    </Form.Select>
  );
};