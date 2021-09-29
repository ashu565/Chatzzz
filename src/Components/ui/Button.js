import { motion } from 'framer-motion';
import { buttonVariants } from '../framer-motion/variants';
export default function Button({ btnType, className, children, ...props }) {
  switch (btnType) {
    case 'primary': {
      return (
        <motion.button
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          whileTap='whileTap'
          {...props}
          className={`py-2 px-6 bg-blue-500 text-white text-base font-medium rounded-lg ${className}`}
        >
          {children}
        </motion.button>
      );
    }
    default: {
      return (
        <motion.button
          variants={buttonVariants}
          initial='hidden'
          animate='visible'
          whileTap='whileTap'
          {...props}
          className={`${className}`}
        >
          {children}
        </motion.button>
      );
    }
  }
}
