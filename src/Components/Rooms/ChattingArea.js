import Chat from '../ui/Chat';
import { useContext } from 'react';
import { Context } from '../../Contexts/chatContext';
export default function ChattingArea({ className }) {
  const chats = useContext(Context);

  const renderChats = () => {
    return chats.state.map((msg, index) => {
      if (msg.type === 'recieved') {
        return (
          <Chat
            type={msg.type}
            key={`${msg.data.roomid}${index}`}
            user={msg.data.user}
          >
            {msg.data.message}
          </Chat>
        );
      } else {
        return (
          <Chat key={`${msg.data.roomid}${index}`} type={msg.type}>
            {msg.data.message}
          </Chat>
        );
      }
    });
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right bottom,rgb(0,0,0),rgba(0,0,0,0.4)),url('/assets/images/chat-bg.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      }}
      className='w-full h-4/5 py-2 px-2 space-y-2 overflow-y-auto scrollbar-hide '
    >
      {renderChats()}
    </div>
  );
}
