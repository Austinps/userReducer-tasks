import { VStack } from '@chakra-ui/react';
import LandingHead from '../components/Landing/LandingHead';
import HeroSection from '../components/Landing/HeroSection';
import LandingBody from '../components/Landing/LandingBody';

export default function Landing() {
  return (
    <>
      <VStack w='80%'>
        <LandingHead />
        <LandingBody /> <HeroSection />
      </VStack>
    </>
  );
}
