import Typography from '../ui/Typography';

export default function Public() {
  const ProfileCard = ({ name }) => {
    return (
      <div className='flex items-center'>
        <img
          className='w-12 h-12 object-cover rounded-full mr-3'
          src='/assets/images/avatar2.jpg'
          alt='avatar'
        ></img>
        <div>
          <Typography type='profile-heading'>{name}</Typography>
          <Typography className='text-xs'>Created 2 months ago</Typography>
        </div>
      </div>
    );
  };
  return (
    <div className='py-6'>
      <Typography type='section-heading' className='font-bold'>
        Public Rooms
      </Typography>
      <div className='h-60 mt-2 space-y-3'>
        <ProfileCard name='Ajay Yadav' />
        <ProfileCard name='Dishka Garg' />
        <ProfileCard name='Manpreet Kaur' />
      </div>
    </div>
  );
}
