import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  durationOffset?: number
}

const SlideRight: React.FC<Props> = ({ children, durationOffset = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 + durationOffset * 0.2, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default SlideRight
