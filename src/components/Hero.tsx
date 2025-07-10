import { Box, Button, Container, Heading, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import ArrowUp from './UpArrow'


const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)
const MotionImage = motion(Image)

const images = [
  { src: "/hero-graphic1.png", w: "100vh" },
  { src: "/hero-graphic2.png", w: "auto" },
  { src: "/hero-graphic3.png", w: "100vh" },
  { src: "/hero-graphic4.png", w: "auto" },
]

const Hero = ({ id }: { id: string }) => {
  const [index, setIndex] = useState(0)

  const bgColor = useColorModeValue("gray.50", "gray.700")
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900")
  const subTextColor = useColorModeValue("gray.600", "gray.300")


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Container
      maxW="100%"
      height="100vh"
      centerContent
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      bg={bgColor}
      id={id}
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        height="100vh"
        px={{ base: 4, md: 20 }}
      >
        <VStack
          spacing={6}
          textAlign="left"
          alignItems="flex-start"
          maxW="lg"
          flex="1"
          zIndex="1"
        >
          <MotionHeading
            size="2xl"
            color={textColor}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Master New Skills Online
          </MotionHeading>

          <MotionText
            fontSize="xl"
            color={subTextColor}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Learn from industry experts with our interactive courses
          </MotionText>

          <MotionButton
            colorScheme="blue"
            size="lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            SkillUp Now 
           
          </MotionButton> 
        </VStack>

        <Box position="relative" width="100vh" height="100vh" style={{alignItems: "center"}} overflow="hidden" flexShrink={0}>
          
          <AnimatePresence mode="wait">
            <MotionImage
              key={index}
              src={images[index].src}
              alt="Learning illustration"
              position="absolute"
              height="100vh"
              width={images[index].w}
              objectFit="cover"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </Box>
      </Box>
    </Container>
  )
}

export default Hero
