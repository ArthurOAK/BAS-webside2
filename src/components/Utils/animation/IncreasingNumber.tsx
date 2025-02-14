import { animate, useInView, useIsomorphicLayoutEffect } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  number: number
  years: boolean
}

const IncreasingNumber: React.FC<Props> = ({ number, years }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { i18n } = useTranslation()
  const inView = useInView(ref, { once: true })
  const prefix = i18n.language === 'th' ? ' ปี' : '+'
  const yearsPrefix = years ? prefix : '+'

  useIsomorphicLayoutEffect(() => {
    const element = ref.current

    if (!element || !inView) return

    element.textContent = String(0) + yearsPrefix

    const controls = animate(0, number, {
      duration: 2.5,
      ease: 'easeInOut',
      onUpdate(value) {
        element.textContent = String(value.toFixed(0)) + yearsPrefix
      },
    })

    return () => {
      controls.stop()
    }
  }, [ref, number, inView])

  return <p className="text-2xl font-semibold text-primary-600 lg:text-4xl" ref={ref} />
  //   return <p className="font-semibold text-primary-600 text-2xl lg:text-4xl" ref={nodeRef}></p>
}

export default IncreasingNumber
