import { motion, Variants } from 'framer-motion'

const ArrowUp = ({ h, w }: { h: number; w: number }) => {
  const side = 0.3 * w
  const centerX = w / 2
  const arrowHeadY = 0.1 * h
  const barY = 0.4 * h
  const bottom = h

  const svgVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 1.5, ease: 'easeInOut' }
    }
  }

  const pathVariants: Variants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 0.95,
      transition: { duration: 1.5, ease: [0.42, 0, 0.58, 1] }
    },
    exit: {
      pathLength: 0.95,
      transition: { duration: 1.5, ease: 'easeInOut' }
    }
  }

  const path = `
    M ${side},${barY}
    L 0,${barY}
    L ${centerX},${arrowHeadY}
    L ${w},${barY}
    L ${w - side},${barY}
    L ${w - side},${bottom}
    L ${side},${bottom}
    L ${side},${barY}
  `

  return (
    <motion.svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={svgVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      // style={{padding:"1rem"}}
    >
      <motion.path
        d={path}
        variants={pathVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </motion.svg>
  )
}

export default ArrowUp
