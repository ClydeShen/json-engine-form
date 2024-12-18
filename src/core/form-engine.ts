import { FormConfig, BaseField } from '../types/form-schema';
import { get } from 'lodash';

export type FormState = Record<string, any>;

export const evaluateCondition = (
  condition: { field: string; operator: string; value: any },
  formState: FormState
) => {
  const fieldValue = get(formState, condition.field);

  switch (condition.operator) {
    case 'equals':
      return fieldValue === condition.value;
    case 'notEquals':
      return fieldValue !== condition.value;
    case 'contains':
      return Array.isArray(fieldValue) 
        ? fieldValue.includes(condition.value)
        : String(fieldValue).includes(String(condition.value));
    case 'notContains':
      return Array.isArray(fieldValue)
        ? !fieldValue.includes(condition.value)
        : !String(fieldValue).includes(String(condition.value));
    case 'in':
      return Array.isArray(condition.value) 
        ? condition.value.includes(fieldValue)
        : false;
    case 'notIn':
      return Array.isArray(condition.value)
        ? !condition.value.includes(fieldValue)
        : true;
    default:
      return true;
  }
};

export const isFieldVisible = (
  field: BaseField,
  formState: FormState
): boolean => {
  if (!field.conditions || field.conditions.length === 0) {
    return !field.hidden;
  }

  return field.conditions.every(condition => 
    evaluateCondition(condition, formState)
  );
};

export const isFieldRequired = (
  field: BaseField,
  formState: FormState
): boolean => {
  if (!field.required) {
    return false;
  }

  if (!field.conditions || field.conditions.length === 0) {
    return field.required;
  }

  return field.conditions.every(condition =>
    evaluateCondition(condition, formState)
  );
};

export const resolveValidation = (
  field: BaseField,
  formState: FormState
) => {
  if (!field.validation) {
    return {};
  }

  const { rules = {}, messages = {} } = field.validation;
  
  // If the field is conditionally required, add the required rule
  if (isFieldRequired(field, formState)) {
    return {
      ...rules,
      required: true,
      message: messages.required || 'This field is required',
    };
  }

  return rules;
};

export const resolveFormConfig = (
  config: FormConfig,
  formState: FormState = {}
) => {
  const resolvedFields = Object.entries(config.fields).reduce(
    (acc, [fieldName, field]) => {
      if (!isFieldVisible(field, formState)) {
        return acc;
      }

      return {
        ...acc,
        [fieldName]: {
          ...field,
          required: isFieldRequired(field, formState),
          validation: resolveValidation(field, formState),
        },
      };
    },
    {}
  );

  return {
    ...config,
    fields: resolvedFields,
  };
};
