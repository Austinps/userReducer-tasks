import { useState } from 'react';
import TextField from './TextField';
import TypeField from './TypeField';
import { INITIAL_STATE_TYPE } from '../../utils/constants';

export default function ListModalBody({ onChangeName }) {
  const [name, setName] = useState('');
  const [type, setType] = useState(INITIAL_STATE_TYPE);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.value.trim()) {
      onChangeName(true);
    } else {
      onChangeName(false);
    }
  };

  return (
    <>
      <TextField value={name} onChange={handleNameChange} />
      <TypeField value={type} onChange={(e) => setType(e.target.value)} />
    </>
  );
}
