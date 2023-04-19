import { BellIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

export default function Notifications() {
  return (
    <IconButton
      aria-label='Notifications'
      variant='ghost'
      icon={<BellIcon boxSize={6} />}
    />
  );
}
