import { Box, Container, Heading, Text, VStack, Flex, Image } from '@chakra-ui/react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'


const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    content: "The courses helped me land my dream job at a tech startup!",
    avsrc: "/avatar1.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    content: "Best investment I made in my career. The instructors are top-notch.",
    avsrc: "/avatar_ds.png"

  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "UX Designer",
    content: "The community support is incredible. Always someone to help.",
    avsrc: "/avatar2.png"

  },
  {
    id: 4,
    name: "David Kim",
    role: "Fullstack Engineer",
    content: "The hands-on projects were exactly what I needed for my portfolio.",
    avsrc: "/avatar_dev.png"

  }
]


const MotionBox = motion(Box)

const TestimonialCarousel = ({ id }: { id: string }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '0px 0px -100px 0px' })

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 10000)
      return () => clearInterval(interval)
    }
  }, [isHovering])


  

  const handleHover = (index: number) => {
    setIsHovering(true)
    setHoveredIndex(index)
    setTimeout(() => {
      setActiveIndex(index)
    }, 800)
  }

  return (
    <MotionBox
      py={20}
      bg="gray.50"
      _dark={{ bg: "gray.700" }}
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Container maxW="container.lg">
        <VStack spacing={10}>
          <Heading textAlign="center" fontSize="3xl" fontWeight="bold">
            What Our Students Say
          </Heading>

          <Flex
            position="relative"
            h="300px"
            w="full"
            justify="center"
            align="center"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Box
              position="absolute"
              left="-150px"
              top="50%"
              transform="translateY(-50%)"
              w="300px"
              h="300px"
              borderRadius="full"
              bg="black"
              _dark={{ bg: "white" }}
              opacity={1}
              zIndex={0}
              overflow="hidden"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={testimonials[activeIndex].id}
                  src={testimonials[activeIndex].avsrc}
                  initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 10 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: '270px',
                    height: '270px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              </AnimatePresence>
            </Box>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeIndex].id}
                initial={{ opacity: 0, y: 20, rotateZ: 10, originX: "-50%" }}
                animate={{ opacity: 1, y: 0, rotateZ: 0, originX: "-50%" }}
                exit={{ opacity: 0, y: -20, rotateZ: -10, originX: "-50%" }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  maxWidth: '600px'
                }}
              >
                <Box
                position="absolute"
                left="-30px"
                top="50%"
                transform="translateY(-50%)"
                w="15px"
                h="30px"
                borderRadius="full"
                bg="black"
                _dark={{ bg: "white" }}
                opacity={0.3}
                zIndex={0}
              />
                <Box
                  p={8}
                  borderRadius="xl"
                  bg="white"
                  _dark={{ bg: "gray.700" }}
                  boxShadow="lg"
                  textAlign="center"
                >
                  <Text fontSize="lg" fontStyle="italic" mb={6}>
                    "{testimonials[activeIndex].content}"
                  </Text>
                  <Text fontWeight="bold">{testimonials[activeIndex].name}</Text>
                  <Text color="gray.500" fontSize="sm">{testimonials[activeIndex].role}</Text>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Flex>

          <Flex gap={4} mt={8}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                onHoverStart={() => handleHover(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.1 }}
                style={{ cursor: 'pointer' }}
              >
                <Box
                  w="10px"
                  h="10px"
                  borderRadius="full"
                  bg={activeIndex === index ? "blue.500" : "gray.200"}
                  _dark={{ bg: activeIndex === index ? "blue.400" : "gray.600" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xl"
                  position="relative"
                />
              </motion.div>
            ))}
          </Flex>
        </VStack>
      </Container>
    </MotionBox>
  )
}

export default TestimonialCarousel
