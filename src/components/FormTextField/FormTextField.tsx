import { TextField, TextFieldProps } from '@mui/material';
import { get } from 'lodash';
import React from 'react';
import { useId } from 'react';
import { useController, useFormContext } from 'react-hook-form';
export type FormTextfieldProps = TextFieldProps & {
  errorMessage?: string;
  name: string;
  label?: string;
};

export const FormTextField = (props: FormTextfieldProps) => {
  const { id, name, errorMessage, disabled, label } = props;
  const autoId = useId();
  const _id = id || autoId;
  const { control } = useFormContext();
  const {
    field,
    formState: { errors },
  } = useController({ name, control, shouldUnregister: true });
  const { ref, onChange: fieldChange, ...fieldProps } = field;
  const error = get(errors, name);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fieldChange(e.target.value);
  };
  return (
    <TextField
      {...fieldProps}
      value={field.value || ''}
      label={label}
      ref={ref}
      id={_id}
      onChange={onChange}
      error={!!error?.message || !!errorMessage}
      helperText={(error?.message || errorMessage) as string}
      disabled={disabled}
    />
  );
};
