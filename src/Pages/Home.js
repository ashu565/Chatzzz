import Wrapper from '../Components/Wrapper';
import SwiperSection from '../Components/Swiper/SwiperSection';
import SwiperCard from '../Components/front/SwiperCard';
import Button from '../Components/ui/Button';
const data = [
  {
    heading: "Let's Get Started",
    description:
      'Chatting online with this app will goinf to blow your misd, Thanks for visiting',
    src: '/assets/images/overview-chat.jpg',
  },
  {
    heading: "Let's Chat Online",
    description:
      'Chatting online with this app will goinf to blow your misd, Thanks for visiting',
    src: '/assets/images/private-chat.jpg',
  },
  {
    heading: "Let's Get code",
    description:
      'Chatting online with this app will goinf to blow your misd, Thanks for visiting',
    src: '/assets/images/public-chat.jpg',
  },
];

export default function Home() {
  return (
    <Wrapper>
      <div className='bg-gray-100 rounded flex flex-col justify-center items-center px-12 h-full'>
        <SwiperSection data={data} Component={SwiperCard} />
        <div className='flex flex-col justify-center mt-10 space-y-2'>
          <Button btnType='primary'>Let's Get Started</Button>
          <Button btnType='primary'>Sign Up</Button>
        </div>
      </div>
    </Wrapper>
  );
}
