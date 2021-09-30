import Footer from '../Components/front/Footer';
import Header from '../Components/front/Header';
import Public from '../Components/front/Public';
import Secret from '../Components/front/Secret';
import Wrapper from '../Components/layouts/Wrapper';
import Typography from '../Components/ui/Typography';

import JoinSecretRoom from '../Components/Rooms/JoinSecretRoom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper className='bg-white px-2 relative '>
      <AnimatePresence>
        {open && <JoinSecretRoom setClose={() => setOpen(false)} />}
      </AnimatePresence>
      <Header />
      <Typography type='caption' className='mt-4'>
        Hello{' '}
        <span className='text-gray-700 font-bold'>Ashutosh Singh Chauhan</span>{' '}
        , You Have Entered the best secure Website in the Entire World.
      </Typography>
      <Secret />
      <Public />
      <Footer setOpen={() => setOpen(true)} />
    </Wrapper>
  );
}
