import { TextField } from '@mui/material'
import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask={/[a-zA-Z]/}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

function InputNome(props: { [x: string]: unknown; }) {
  return (
    <TextField
      { ...props}
      InputProps={{
        inputComponent: TextMaskCustom as never,
      }}
    />
  )
}

export default InputNome