import {
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  Stack,
} from '@mui/material';
import React from 'react';
import { useId } from 'react';
import { get, useController, useFormContext } from 'react-hook-form';

export type LabelValue = {
  label: string;
  value: string | boolean;
};
export type FormRadioGroupProps = RadioGroupProps & {
  options: readonly LabelValue[];
  label?: string;
  errorMessage?: string;
  name: string;
};

export const FormRadioGroup = (props: FormRadioGroupProps) => {
  const {
    id,
    name,
    errorMessage,
    defaultValue = '',
    options,
    label,
  } = props;
  const autoId = useId();
  const _id = id || autoId;
  const { control } = useFormContext();
  const {
    field,
    formState: { errors },
  } = useController({ name, control });
  const { ref, ...fieldProps } = field;
  const error = get(errors, name);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.value === 'true');
  };
  return (
    <Stack>
      {label && <FormLabel htmlFor={_id}>{label}</FormLabel>}
      <RadioGroup {...fieldProps} ref={ref} id={_id} onChange={onChange} row>
        {options.map((option) => (
          <FormControlLabel
            key={option.value.toString()}
            label={option.label}
            value={option.value}
            checked={field.value === option.value}
            control={<Radio color={'default'} />}
          />
        ))}
      </RadioGroup>
      {error?.message && <FormHelperText error>{error.message}</FormHelperText>}
    </Stack>
  );
};
