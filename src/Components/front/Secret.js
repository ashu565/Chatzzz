import Typography from '../ui/Typography';

export default function Secret() {
  return (
    <div className='pt-6'>
      <Typography type='section-heading' className='font-bold'>
        Secret Rooms
      </Typography>
      <div className='max-h-60 mt-2 overflow-y-auto scrollbar-hide'>
        <Typography type='section-description' className='text-center'>
          Shh! its secret, create your's
        </Typography>
      </div>
    </div>
  );
}
