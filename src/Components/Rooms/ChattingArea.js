import Chat from '../ui/Chat';
export default function ChattingArea({ className }) {
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
      <Chat type='notice'>Krishna Tripathi Joined</Chat>
      <Chat type='notice'>Chanchal Mishra Joined</Chat>
      <Chat type='notice'>Devanshu Joined</Chat>
      <Chat type='mymessage'>Hello Devanshu How are you,Chanchal</Chat>
      <Chat user='Devanshu Sharma' type='friend'>
        Hey Chanchal
      </Chat>
      <Chat user='Krishna Tripathi' type='friend'>
        Gullu Bhai Aisaa na
      </Chat>
      <Chat type='notice'>Krishna Tripathi Left</Chat>
      <Chat type='notice'>Krishna Tripathi Joined</Chat>
      <Chat type='notice'>Chanchal Mishra Joined</Chat>
      <Chat type='notice'>Devanshu Joined</Chat>
    </div>
  );
}
