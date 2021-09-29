import Button from '../ui/Button';
import Typography from '../ui/Typography';
export default function Header() {
  return (
    <div className='px-2 py-2 border-b-2 border-gray-100 flex items-center justify-between'>
      <Typography type='secondary'>
        WeChat <span className='text-sm'>v2.0</span>
      </Typography>
      <Button btnType='primary'>Logout</Button>
    </div>
  );
}
