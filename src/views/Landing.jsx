import { VStack } from '@chakra-ui/react';
import HeroSection from '../components/Landing/HeroSection';
import LandingBody from '../components/Landing/LandingBody';

export default function Landing() {
  return (
    <>
      <VStack w='80%'>
        <LandingBody /> <HeroSection />
      </VStack>
    </>
  );
}
