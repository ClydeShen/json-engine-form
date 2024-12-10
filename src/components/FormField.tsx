import React from 'react';
import { useFormContext } from 'react-hook-form';
import { BaseField, FormFieldTypeEnum } from '../types/schema';
import { FormControl, FormLabel, FormHelperText } from '@mui/material';
import { FormTextField } from './FormTextField';
import { FormNumberField } from './FormNumberField';
import { FormSelector } from './FormSelector';
import { FormCheckbox } from './FormCheckbox';
import { FormRadioGroup } from './FormRadioGroup';
import { FormDatepicker } from './FormDatepicker';
import { FormAutocomplete } from './FormAutocomplete';

interface FormFieldProps {
  name: string;
  field: BaseField;
}

export const FormField: React.FC<FormFieldProps> = ({ name, field }) => {
  const { formState: { errors }, setValue, watch } = useFormContext();
  const error = errors[name];
  const value = watch(name);

  const renderField = () => {
    switch (field.type) {
      case FormFieldTypeEnum.TEXT:
        return (
          <FormTextField
            name={name}
            label={field.label}
            errorMessage={error?.message}
            disabled={field.disabled}
            fullWidth
          />
        );

      case FormFieldTypeEnum.NUMBER:
        return (
          <FormNumberField
            name={name}
            label={field.label}
            errorMessage={error?.message}
            disabled={field.disabled}
            fullWidth
          />
        );

      case FormFieldTypeEnum.SELECT:
        return (
          <FormSelector
            name={name}
            label={field.label}
            options={field.options || []}
            errorMessage={error?.message}
            disabled={field.disabled}
            fullWidth
          />
        );

      case FormFieldTypeEnum.CHECKBOX:
        return (
          <FormCheckbox
            name={name}
            label={field.label}
            errorMessage={error?.message}
            disabled={field.disabled}
          />
        );

      case FormFieldTypeEnum.RADIO:
        return (
          <FormRadioGroup
            name={name}
            label={field.label}
            options={field.options || []}
            errorMessage={error?.message}
            disabled={field.disabled}
          />
        );

      case FormFieldTypeEnum.DATE:
        return (
          <FormDatepicker
            name={name}
            label={field.label}
            errorMessage={error?.message}
            disabled={field.disabled}
          />
        );

      case FormFieldTypeEnum.AUTOCOMPLETE:
        return (
          <FormAutocomplete
            name={name}
            label={field.label}
            options={field.options || []}
            errorMessage={error?.message}
            disabled={field.disabled}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      {renderField()}
      {field.description && !error?.message && (
        <FormHelperText>{field.description}</FormHelperText>
      )}
    </div>
  );
};
