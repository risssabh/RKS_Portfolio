import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.a
      href="#hero"
      aria-label="RKS logo"
      className="logo"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="dot">.</span>
      <span className="r">R</span>
      <span className="ks">KS</span>
    </motion.a>
  )
}
