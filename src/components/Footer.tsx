import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';

const Footer = ({ id }: { id: string }) => {
  return (
    <Box bg="black" color="white" py={10} id={id}>
      <Container maxW="container.lg">
        <Flex direction={{ base: "column", md: "row" }} gap={8}>
          <Box flex={1}>
            <Text fontSize="xl" fontWeight="bold">SkillUp</Text>
            <Text mt={2}>Learn in-demand skills at your own pace.</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Links</Text>
            <Flex direction="column" mt={2}>
              <Link href="#">Home</Link>
              <Link href="#">Courses</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">About</Link>
            </Flex>
          </Box>
          <Box>
            <Text fontWeight="bold">Legal</Text>
            <Flex direction="column" mt={2}>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Cookies</Link>
            </Flex>
          </Box>
        </Flex>
        <Text mt={10} textAlign="center">© 2025 SkillUp. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
