import Typography from './Typography';
export default function Chat({ type, children, user }) {
  switch (type) {
    case 'mymessage': {
      return (
        <div style={{ maxWidth: '80%' }} className=' ml-auto flex justify-end'>
          <div className='inline-block bg-blue-500 py-1 px-3 rounded-lg'>
            <Typography type='caption' className='text-white font-base'>
              {children}
            </Typography>
          </div>
        </div>
      );
    }
    case 'friend': {
      return (
        <div
          style={{ maxWidth: '80%' }}
          className='flex justify-start relative '
        >
          <div className='inline-block bg-gray-500 py-1 px-3 rounded-lg space-y-0.5 '>
            <Typography className='text-gray-200 text-xs'>{user}</Typography>
            <Typography type='caption' className='text-white font-base'>
              {children}
            </Typography>
          </div>
        </div>
      );
    }
    case 'notice': {
      return (
        <Typography
          type='caption'
          className='text-gray-200 font-base text-center'
        >
          {children}
        </Typography>
      );
    }
    default: {
      return <Typography>{children}</Typography>;
    }
  }
}
