import { Box, Container, Grid, Heading, Icon, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLaptopCode, FaCertificate, FaUsers, FaChartLine } from 'react-icons/fa'

const features = [
  {
    icon: FaLaptopCode,
    title: "Interactive Learning",
    description: "Hands-on coding exercises and projects"
  },
  {
    icon: FaCertificate,
    title: "Certification",
    description: "Earn certificates upon course completion"
  },
  {
    icon: FaUsers,
    title: "Community Support",
    description: "Join our community of learners"
  },
  {
    icon: FaChartLine,
    title: "Career Growth",
    description: "Boost your career with in-demand skills"
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

const FeatureCard = motion(Box)
const MotionBox = motion(Box)

const Features = ({ id }: { id: string }) => {
  const cardBg = useColorModeValue("white", "gray.600")
  const sectionBg = useColorModeValue("white", "gray.800")
  const cardShadow = useColorModeValue("md", "dark-lg")
  const cardHoverShadow = useColorModeValue(
    "0px 0px 8px rgba(0,0,0,0.3)",
    "0px 0px 12px rgba(255,255,255,0.2)"
  )

  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '0px' })

  return (
    <MotionBox
      ref={ref}
      py={20}
      id={id}
      bg={sectionBg}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <Container maxW="container.lg">
        <VStack spacing={10}>
          <Heading textAlign="center">Why Choose SkillUp?</Heading>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={8}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                p={6}
                borderRadius="lg"
                bg={cardBg}
                boxShadow={cardShadow}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: cardHoverShadow
                }}
                viewport={{ once: true }}
              >
                <VStack spacing={4} align="center">
                  <Icon as={feature.icon} boxSize={8} color="blue.500" />
                  <Heading size="md" textAlign="center">{feature.title}</Heading>
                  <Text textAlign="center">{feature.description}</Text>
                </VStack>
              </FeatureCard>
            ))}
          </Grid>
        </VStack>
      </Container>
    </MotionBox>
  )
}

export default Features
