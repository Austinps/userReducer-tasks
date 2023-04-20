import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function NameField({ value, onChange }) {
  return (
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input type='text' value={value} onChange={onChange} />
    </FormControl>
  );
}
