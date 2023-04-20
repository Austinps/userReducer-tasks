import { FormControl, FormLabel, Select } from '@chakra-ui/react';

export default function TypeField({ value, onChange }) {
  return (
    <FormControl mt='4'>
      <FormLabel>Type</FormLabel>
      <Select value={value} onChange={onChange}>
        <option value='personal'>Personal</option>
        <option value='business'>Business</option>
      </Select>
    </FormControl>
  );
}
