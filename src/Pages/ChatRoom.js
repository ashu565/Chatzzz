import Header from '../Components/front/Header';
import Wrapper from '../Components/layouts/Wrapper';
import ChattingArea from '../Components/Rooms/ChattingArea';
import TextInput from '../Components/ui/TextInput';

export default function ChatRoom() {
  return (
    <Wrapper className='bg-white'>
      <Header />
      <ChattingArea />
      <TextInput
        placeholder='Enter Your Message Here'
        type='message'
      ></TextInput>
    </Wrapper>
  );
}
