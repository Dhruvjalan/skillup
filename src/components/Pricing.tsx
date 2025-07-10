import { Box, Button, Container, Flex, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: ["Access to basic courses", "Community support", "Limited projects"],
    cta: "Get Started"
  },
  {
    name: "Pro",
    price: "$19/month",
    features: ["All courses", "Certificates", "Unlimited projects", "Priority support"],
    cta: "Subscribe",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Team access", "Custom courses", "Dedicated mentor", "Analytics"],
    cta: "Contact Us"
  }
]

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 10,
      duration: 0.6
    }
  }
}

const MotionBox = motion(Box)

const Pricing = ({ id }: { id: string }) => {
  const sectionBg = useColorModeValue("white", "gray.800")
  const cardBg = useColorModeValue("white", "gray.700")
  const borderColor = useColorModeValue("gray.200", "gray.600")
  const popularBorderColor = useColorModeValue("blue.500", "blue.300")
  const popularBadgeBg = useColorModeValue("blue.500", "blue.300")
  const popularBadgeColor = useColorModeValue("white", "gray.900")
  const checkColor = useColorModeValue("green.600", "green.300")

  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '0px' })

  return (
    <MotionBox py={20} id={id} bg={sectionBg} ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <Container maxW="container.lg">
        <VStack spacing={10}>
          <Heading textAlign="center">Simple, Transparent Pricing</Heading>
          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            {plans.map((plan, index) => (
              <Box
                key={index}
                flex={1}
                p={8}
                borderRadius="lg"
                bg={cardBg}
                boxShadow="md"
                borderWidth={plan.popular ? "2px" : "1px"}
                borderColor={plan.popular ? popularBorderColor : borderColor}
                position="relative"
              >
                {plan.popular && (
                  <Box
                    position="absolute"
                    top={-3}
                    left="50%"
                    transform="translateX(-50%)"
                    bg={popularBadgeBg}
                    color={popularBadgeColor}
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                  >
                    Popular
                  </Box>
                )}
                <VStack spacing={6} align="stretch">
                  <Heading size="lg">{plan.name}</Heading>
                  <Heading size="xl">{plan.price}</Heading>
                  <VStack spacing={4} align="start">
                    {plan.features.map((feature, i) => (
                      <Text key={i} color={checkColor}>✓ {feature}</Text>
                    ))}
                  </VStack>
                  <Button colorScheme={plan.popular ? "blue" : "gray"} size="lg" mt={4}>
                    {plan.cta}
                  </Button>
                </VStack>
              </Box>
            ))}
          </Flex>
        </VStack>
      </Container>
    </MotionBox>
  )
}

export default Pricing
