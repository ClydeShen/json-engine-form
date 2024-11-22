"use client";

import { useCallback, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Box, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import type { IFormConfig, IFormField, IFieldOption } from "../../utils/types";

interface DynamicFormProps {
  config: IFormConfig;
  onSubmit: (data: Record<string, unknown>) => void;
  onSaveDraft: (data: Record<string, unknown>) => void;
  onDiscard: () => void;
}

const createValidationSchema = (config: IFormConfig) => {
  const schema: Record<string, any> = {};

  config.fields.forEach((field) => {
    let fieldSchema = z.any();

    switch (field.type) {
      case "text":
        fieldSchema = z.string();
        if (field.validation) {
          field.validation.forEach((validation) => {
            if (validation.type === "required") {
              fieldSchema = fieldSchema.min(1, validation.message);
            }
            if (validation.type === "maxLength" && validation.params?.max) {
              fieldSchema = fieldSchema.max(
                validation.params.max as number,
                validation.message
              );
            }
          });
        }
        break;

      case "number":
        fieldSchema = z.number();
        if (field.validation) {
          field.validation.forEach((validation) => {
            if (validation.type === "required") {
              fieldSchema = fieldSchema.min(1, validation.message);
            }
            if (validation.type === "min" && validation.params?.min) {
              fieldSchema = fieldSchema.min(
                validation.params.min as number,
                validation.message
              );
            }
            if (validation.type === "max" && validation.params?.max) {
              fieldSchema = fieldSchema.max(
                validation.params.max as number,
                validation.message
              );
            }
            if (validation.type === "integer") {
              fieldSchema = fieldSchema.int(validation.message);
            }
          });
        }
        break;

      case "date":
        fieldSchema = z.any().transform((val) => {
          if (!val) return null;
          const date = dayjs(val);
          return date.isValid() ? date : null;
        });
        if (field.validation) {
          field.validation.forEach((validation) => {
            if (validation.type === "required") {
              fieldSchema = fieldSchema.refine(
                (val) => val !== null,
                validation.message
              );
            }
            if (validation.type === "futureDate") {
              fieldSchema = fieldSchema.refine(
                (val) => !val || val.isAfter(dayjs()),
                validation.message
              );
            }
          });
        }
        break;

      case "select":
        fieldSchema = z.string();
        if (field.validation) {
          field.validation.forEach((validation) => {
            if (validation.type === "required") {
              fieldSchema = fieldSchema.min(1, validation.message);
            }
          });
        }
        break;

      case "checkbox":
        fieldSchema = z.boolean();
        if (field.validation) {
          field.validation.forEach((validation) => {
            if (validation.type === "required") {
              fieldSchema = fieldSchema.refine(
                (val) => val === true,
                validation.message
              );
            }
          });
        }
        break;

      default:
        fieldSchema = z.any();
    }

    schema[field.name] = field.required ? fieldSchema : fieldSchema.optional();
  });

  return z.object(schema);
};

const renderField = (
  field: IFormField,
  control: any,
  errors: Record<string, any>
) => {
  if (!field.visible) return null;

  switch (field.type) {
    case "text":
      return (
        <Controller
          name={field.name}
          control={control}
          defaultValue={field.defaultValue || ""}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              label={field.label}
              value={value}
              onChange={onChange}
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
              disabled={!field.enabled}
            />
          )}
        />
      );

    case "number":
      return (
        <Controller
          name={field.name}
          control={control}
          defaultValue={field.defaultValue || ""}
          render={({ field: { onChange, value } }) => (
            <TextField
              fullWidth
              type="number"
              label={field.label}
              value={value}
              onChange={(e) =>
                onChange(e.target.value ? Number(e.target.value) : "")
              }
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message}
              disabled={!field.enabled}
              inputProps={
                field.metadata as React.InputHTMLAttributes<HTMLInputElement>
              }
            />
          )}
        />
      );

    case "date":
      return (
        <Controller
          name={field.name}
          control={control}
          defaultValue={null}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              label={field.label}
              value={value}
              onChange={(newValue) => {
                onChange(newValue ? dayjs(newValue) : null);
              }}
              disabled={!field.enabled}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: !!errors[field.name],
                  helperText: errors[field.name]?.message,
                },
              }}
            />
          )}
        />
      );

    case "select":
      return (
        <Controller
          name={field.name}
          control={control}
          defaultValue={field.defaultValue || ""}
          render={({ field: { onChange, value } }) => (
            <FormControl fullWidth error={!!errors[field.name]}>
              <InputLabel>{field.label}</InputLabel>
              <Select
                label={field.label}
                value={value}
                onChange={onChange}
                disabled={!field.enabled}
              >
                {((field.metadata?.options as IFieldOption[]) || []).map(
                  (option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          )}
        />
      );

    case "checkbox":
      return (
        <Controller
          name={field.name}
          control={control}
          defaultValue={field.defaultValue || false}
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                  disabled={!field.enabled}
                />
              }
              label={field.label}
            />
          )}
        />
      );

    default:
      return null;
  }
};

const DynamicForm = ({
  config,
  onSubmit,
  onSaveDraft,
  onDiscard,
}: DynamicFormProps) => {
  const validationSchema = useMemo(
    () => createValidationSchema(config),
    [config]
  );
  const defaultValues = useMemo(() => {
    const values: Record<string, any> = {};
    config.fields.forEach((field) => {
      values[field.name] = field.defaultValue;
    });
    return values;
  }, [config]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues,
  });

  const handleSubmitForm = useCallback(
    (data: Record<string, unknown>) => {
      onSubmit(data);
    },
    [onSubmit]
  );

  const handleSaveDraft = useCallback(() => {
    const data = getValues();
    onSaveDraft(data);
  }, [getValues, onSaveDraft]);

  const handleDiscard = useCallback(() => {
    reset();
    onDiscard();
  }, [reset, onDiscard]);

  return (
    <Box component="form" onSubmit={handleSubmit(handleSubmitForm)} noValidate>
      <Stack spacing={3}>
        {config.fields.map((field) => (
          <Box key={field.id}>{renderField(field, control, errors)}</Box>
        ))}

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="outlined" onClick={handleDiscard}>
            Discard
          </Button>
          <Button variant="outlined" onClick={handleSaveDraft}>
            Save Draft
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DynamicForm;
