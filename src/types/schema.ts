import { z } from 'zod';

export const FormFieldTypeEnum = {
  TEXT: 'text',
  NUMBER: 'number',
  SELECT: 'select',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  DATE: 'date',
  AUTOCOMPLETE: 'autocomplete',
} as const;

export type FormFieldType = typeof FormFieldTypeEnum[keyof typeof FormFieldTypeEnum];

export const BaseFieldSchema = z.object({
  type: z.enum([
    FormFieldTypeEnum.TEXT,
    FormFieldTypeEnum.NUMBER,
    FormFieldTypeEnum.SELECT,
    FormFieldTypeEnum.CHECKBOX,
    FormFieldTypeEnum.RADIO,
    FormFieldTypeEnum.DATE,
    FormFieldTypeEnum.AUTOCOMPLETE,
  ]),
  name: z.string(),
  label: z.string(),
  required: z.boolean().optional(),
  disabled: z.boolean().optional(),
  hidden: z.boolean().optional(),
  defaultValue: z.any().optional(),
  description: z.string().optional(),
  validation: z.object({
    rules: z.record(z.any()).optional(),
    messages: z.record(z.string()).optional(),
  }).optional(),
  dependencies: z.array(z.string()).optional(),
  conditions: z.array(z.object({
    field: z.string(),
    operator: z.enum(['equals', 'notEquals', 'contains', 'notContains', 'in', 'notIn']),
    value: z.any(),
  })).optional(),
});

export type BaseField = z.infer<typeof BaseFieldSchema>;

export const FormConfigSchema = z.object({
  fields: z.record(BaseFieldSchema),
  layout: z.object({
    sections: z.array(z.object({
      title: z.string().optional(),
      fields: z.array(z.string()),
    })).optional(),
  }).optional(),
  validation: z.object({
    mode: z.enum(['onChange', 'onBlur', 'onSubmit']).optional(),
    reValidateMode: z.enum(['onChange', 'onBlur', 'onSubmit']).optional(),
  }).optional(),
});

export type FormConfig = z.infer<typeof FormConfigSchema>;
