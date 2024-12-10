import React, { useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormConfig } from '../types/schema';
import { resolveFormConfig } from '../core/form-engine';
import { FormField } from './FormField';
import { Box } from '@mui/material';

export interface FormProps {
  config: FormConfig;
  onSubmit: (data: any) => void;
  defaultValues?: Record<string, any>;
}

export const Form: React.FC<FormProps> = ({
  config,
  onSubmit,
  defaultValues = {},
}) => {
  const methods = useForm({
    defaultValues,
    mode: config.validation?.mode || 'onChange',
    reValidateMode: config.validation?.reValidateMode || 'onChange',
  });

  const { watch } = methods;
  const formState = watch();

  const resolvedConfig = useMemo(() => 
    resolveFormConfig(config, formState),
    [config, formState]
  );

  const renderFields = () => {
    if (!config.layout?.sections) {
      return Object.entries(resolvedConfig.fields).map(([name, field]) => (
        <FormField key={name} name={name} field={field} />
      ));
    }

    return config.layout.sections.map((section, index) => (
      <Box key={index} sx={{ mb: 3 }}>
        {section.title && (
          <Box sx={{ mb: 2, typography: 'h6' }}>{section.title}</Box>
        )}
        <Box>
          {section.fields.map(fieldName => {
            const field = resolvedConfig.fields[fieldName];
            if (!field) return null;
            return <FormField key={fieldName} name={fieldName} field={field} />;
          })}
        </Box>
      </Box>
    ));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {renderFields()}
      </form>
    </FormProvider>
  );
};
