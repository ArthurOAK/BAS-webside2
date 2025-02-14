import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  durationOffset?: number
}

const SlideDown: React.FC<Props> = ({ children, durationOffset = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 + durationOffset * 0.1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default SlideDown
