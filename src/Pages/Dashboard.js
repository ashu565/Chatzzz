import Footer from '../Components/front/Footer';
import Header from '../Components/front/Header';
import Public from '../Components/front/Public';
import Secret from '../Components/front/Secret';
import Wrapper from '../Components/layouts/Wrapper';
import Typography from '../Components/ui/Typography';

export default function Dashboard() {
  return (
    <Wrapper>
      <Header />
      <Typography type='caption' className='mt-4'>
        Hello <span className='text-red-500'>Ashutosh Singh Chauhan</span> , You
        Have Entered the best secure Website in the Entire World.
      </Typography>
      {/* Secret Rooms Section */}
      <Secret />
      {/* Public Room Section */}
      <Public />
      <Footer />
    </Wrapper>
  );
}
