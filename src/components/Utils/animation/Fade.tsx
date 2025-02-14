import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

const Fade: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  )
}

export default Fade
