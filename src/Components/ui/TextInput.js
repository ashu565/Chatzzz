import Typography from './Typography';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';
export default function TextInput({
  type,
  label,
  placeholder,
  value,
  setValue,
  inputClassName,
}) {
  const id = useMemo(() => nanoid(), []);
  switch (type) {
    case 'primary': {
      return (
        <div className='space-y-1'>
          {label && (
            <label htmlFor={id}>
              <Typography className='text-gray-800 text-base '>
                {label}
              </Typography>
            </label>
          )}
          <input
            id={id}
            value={value}
            setValue={setValue}
            placeholder={placeholder}
            className={`rounded border-2 border-gray-400 w-full p-2 outline-none text-gray-800 font-medium ${inputClassName}`}
          />
        </div>
      );
    }
    default: {
      return (
        <div className='space-y-1'>
          <label htmlFor={id}>
            <Typography type='secondary-heading'>{label}</Typography>
          </label>
          <input
            className={`${inputClassName}`}
            id={id}
            value={value}
            setValue={setValue}
            placeholder={placeholder}
          />
        </div>
      );
    }
  }
}
