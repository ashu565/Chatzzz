import Button from '../ui/Button';
import Modal from '../ui/Modal';
import TextInput from '../ui/TextInput';
export default function JoinSecretRoom({ setClose }) {
  return (
    <Modal title='We Chat Secret Rooms'>
      <TextInput type='primary' label='Enter Your Secret Room ID' />
      <div className='space-x-2 float-right'>
        <Button btnType='primary' className='mt-2'>
          Submit
        </Button>
        <Button btnType='danger' onClick={setClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
