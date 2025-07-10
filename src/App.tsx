import { ChakraProvider, Flex } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" minH="100vh">
        <Navbar />
        <Hero id="hero" />
        <Features id="features" />
        <Testimonials id="testimonials" />
        <Pricing id="pricing" />
        <Footer id="footer" />
      </Flex>
    </ChakraProvider>
  );
}

export default App;