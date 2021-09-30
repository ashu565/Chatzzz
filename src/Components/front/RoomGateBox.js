import { GiSpy } from 'react-icons/gi';
import { AiOutlinePlus } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { dashboardVariants } from '../framer-motion/variants';
export default function RoomGateBox({ setOpen }) {
  const IconWrapper = ({ Component, ...props }) => {
    return (
      <motion.div
        {...props}
        variants={dashboardVariants}
        whileTap='whileTap'
        className='p-3 h-12 w-12 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer'
      >
        <Component className=' text-2xl text-white inline-block' />
      </motion.div>
    );
  };
  return (
    <motion.div
      variants={dashboardVariants}
      initial='hidden'
      animate='visible'
      className='absolute right-2 bottom-12 space-y-1'
    >
      <IconWrapper onClick={setOpen} Component={GiSpy} />
      <IconWrapper Component={AiOutlinePlus} />
    </motion.div>
  );
}

// 1,2,3,5,5
