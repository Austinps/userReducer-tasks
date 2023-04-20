import PropTypes from 'prop-types';

import NavBar from './NavBar';
import Footer from './Footer';
import { Container } from '@chakra-ui/react';
import PageWrapper from './PageWrapper';

export default function Layout({ children }) {
  return (
    <Container maxW='container.lg' mt={['5', '8']} mb={85}>
      <NavBar />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
