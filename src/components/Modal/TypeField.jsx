import PropTypes from 'prop-types';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';

export default function TypeField({ value, onChange, category = 'category' }) {
  return (
    <FormControl mt='4'>
      <FormLabel
        as='label'
        htmlFor='type-select'
        position='absolute'
        left='-9999px'
      >
        {category}
      </FormLabel>
      <Select value={value} onChange={onChange}>
        <option value='' disabled selected>
          Select a category
        </option>
        <option value='personal'>Personal</option>
        <option value='business'>Business</option>
      </Select>
    </FormControl>
  );
}
TypeField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
