import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function TextField({
  headerText = 'name',
  value,
  onChange,
  onBlur,
  isInvalid,
  placeholder = 'type something',
}) {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel
        as='label'
        htmlFor='type-select'
        position='absolute'
        left='-9999px'
      >
        {headerText}
      </FormLabel>
      <Input
        type='text'
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </FormControl>
  );
}
