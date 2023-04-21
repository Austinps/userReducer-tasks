import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function TextField({
  headerText = 'name',
  value,
  onChange,
  onBlur,
  isInvalid,
}) {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{headerText}</FormLabel>
      <Input type='text' value={value} onChange={onChange} onBlur={onBlur} />
    </FormControl>
  );
}
