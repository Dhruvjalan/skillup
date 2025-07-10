import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  Link,
  useColorModeValue,
  Container
} from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ArrowUp from './UpArrow'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const sectionBg = useColorModeValue('gray.100', 'gray.700')
  const [showArrow, setShowArrow] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowArrow(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Container maxW="container.xl" py={4}>
      <Box
        px={8}
        py={4}
        boxShadow="xl"
        bg={sectionBg}
        borderRadius="full" 
        overflow="hidden"
      >
        <Flex alignItems="center" gap={4}>
          <Flex align="center" gap={2}>
            <Heading size="lg">SkillUp</Heading>
            <AnimatePresence mode="wait">
              {showArrow && (
                <ArrowUp
                  h={40}
                  w={20}
                  key={showArrow ? 'arrow-visible' : 'arrow-hidden'}
                />
              )}
            </AnimatePresence>
          </Flex>

          <Spacer />
          <Flex gap={4}>
            <Link href="#hero">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="#features">
              <Button variant="ghost">Features</Button>
            </Link>
            <Link href="#pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>
            <Link href="#testimonials">
              <Button variant="ghost">Reviews</Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? '🌙' : '☀️'}
            </Button>
            <Button colorScheme="blue">Sign Up</Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}

export default Navbar
