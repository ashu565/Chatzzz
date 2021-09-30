import Modal from '../ui/Modal';
import TextRadio from '../ui/TextRadio';
import Typography from '../ui/Typography';
import Button from '../ui/Button';
import { v4 as uuidv4 } from 'uuid';
import { useMemo } from 'react';
import { useState } from 'react';
export default function CreateRoom({ setvalue }) {
  const id = useMemo(() => uuidv4(), []);
  const [publicRoomType, setPublicRoomType] = useState(true);
  return (
    <Modal title='Welcome to the Creation of Room'>
      <Typography type='section-heading'>
        Hurray!! your room is ready to share{' '}
        <span className='text-blue-500 '>{id}</span> You are about to create
        your wechat room, do you want to make it public or Private
      </Typography>
      <div className='py-2'>
        <TextRadio
          onClick={() => setPublicRoomType(true)}
          selected={publicRoomType ? 'true' : ''}
        >
          Public
        </TextRadio>
        <TextRadio
          onClick={() => setPublicRoomType(false)}
          selected={!publicRoomType ? 'true' : ''}
        >
          Private
        </TextRadio>
      </div>
      <div className='space-x-2 float-right'>
        <Button btnType='primary' className='mt-2'>
          Submit
        </Button>
        <Button onClick={() => setvalue(false)} btnType='danger'>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
