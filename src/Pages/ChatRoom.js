import Header from '../Components/front/Header';
import Wrapper from '../Components/layouts/Wrapper';
import ChattingArea from '../Components/Rooms/ChattingArea';
import Button from '../Components/ui/Button';
import TextInput from '../Components/ui/TextInput';
import { Context } from '../Contexts/chatContext';
import { useContext, useEffect, useMemo, useState } from 'react';
import socketio from 'socket.io-client';
import { useParams } from 'react-router';
export default function ChatRoom() {
  const chats = useContext(Context);
  const params = useParams();
  const roomid = useMemo(() => params.id, []);
  const [inputMsg, setInputMsg] = useState('');
  const Endpoint = 'http://localhost:4000';
  const socket = socketio(Endpoint, {
    withCredentials: true,
  });
  useEffect(() => {
    socket.emit('create', { room: roomid, name: 'Ashutosh Singh' });
    socket.on('user-joined', (name) => {
      Notice(name, roomid);
    });
    socket.on('toClient', ({ name, message }) => {
      Recieved(message, roomid, name);
    });
    socket.on('user-left', (name) => {
      console.log(name);
    });
  }, []);

  const Send = (message, roomid) => {
    chats.sendMessage(message, roomid);
  };
  const Recieved = (message, roomid, name) => {
    chats.recievedMessage(message, roomid, name);
  };
  const Notice = (name, roomid) => {
    chats.recievedNotice(name, roomid);
  };
  const HandleSendMessage = () => {
    if (!inputMsg) return;
    Send(inputMsg, roomid);
    socket.emit('toServer', {
      room: roomid,
      name: 'Ashutosh Singh',
      message: inputMsg,
    });
  };
  return (
    <Wrapper className='bg-white'>
      <Header />
      <ChattingArea />
      <TextInput
        value={inputMsg}
        setValue={setInputMsg}
        placeholder='Enter Your Message Here'
        type='message'
        sendMessage={HandleSendMessage}
      ></TextInput>
    </Wrapper>
  );
}
