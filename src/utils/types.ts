import { ComponentType } from 'react';

// Core Engine Interfaces
export interface IFormEngine {
  initialize(config: IFormConfig): void;
  render(): JSX.Element;
  validate(): Promise<boolean>;
  getValues(): Record<string, unknown>;
  setValues(values: Record<string, unknown>): void;
  reset(): void;
}

export interface IFieldRegistry {
  register(plugin: IFieldTypePlugin): void;
  unregister(type: string): void;
  getPlugin(type: string): IFieldTypePlugin | undefined;
  getRegisteredTypes(): string[];
}

export interface IValidationEngine {
  validateField(fieldId: string, value: unknown, context: IValidationContext): Promise<IValidationResult>;
  validateForm(values: Record<string, unknown>, config: IFormConfig): Promise<Record<string, IValidationResult>>;
  registerValidator(type: string, validator: IValidator): void;
}

export interface IFormRenderer {
  renderField(field: IFormField, props: IFieldProps): JSX.Element;
  renderLayout(layout: IFormLayout, fields: IFormField[]): JSX.Element;
  renderSection(section: ILayoutSection): JSX.Element;
}

// Configuration Interfaces
export interface IFormConfig {
  id: string;
  title: string;
  description?: string;
  version: string;
  fields: IFormField[];
  validation?: IValidationRule[];
  layout?: IFormLayout;
  metadata?: Record<string, unknown>;
}

export interface IFormField {
  id: string;
  type: string;
  name: string;
  label: string;
  defaultValue?: unknown;
  required?: boolean;
  visible?: boolean;
  enabled?: boolean;
  validation?: IFieldValidation[];
  dependencies?: IFieldDependency[];
  metadata?: Record<string, unknown>;
}

export interface IFieldDependency {
  on: string; // Field ID this dependency is based on
  type: DependencyType;
  condition: ICondition;
  action: IAction;
}

export type DependencyType = 'visibility' | 'enablement' | 'value' | 'validation';

export interface ICondition {
  type: ConditionType;
  value: unknown;
  metadata?: Record<string, unknown>;
}

export type ConditionType = 'equals' | 'notEquals' | 'contains' | 'greaterThan' | 'lessThan' | 'regex' | 'custom';

export interface IAction {
  type: ActionType;
  value?: unknown;
  metadata?: Record<string, unknown>;
}

export type ActionType = 'show' | 'hide' | 'enable' | 'disable' | 'setValue' | 'clearValue' | 'setValidation' | 'custom';

export interface IValidationRule {
  field: string;
  type: string;
  params?: Record<string, unknown>;
  message: string;
  level?: ValidationLevel;
}

export type ValidationLevel = 'error' | 'warning' | 'info';

export interface IFormLayout {
  type: LayoutType;
  sections?: ILayoutSection[];
  columns?: number;
  metadata?: Record<string, unknown>;
}

export type LayoutType = 'single' | 'tabs' | 'sections' | 'wizard';

export interface ILayoutSection {
  id: string;
  title?: string;
  description?: string;
  fields: string[]; // Array of field IDs
  layout?: Partial<IFormLayout>;
  metadata?: Record<string, unknown>;
}

// Plugin System
export interface IFieldTypePlugin {
  type: string;
  component: ComponentType<IFieldProps>;
  validator?: IFieldValidator;
  defaultProps?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}

export interface IFieldProps {
  field: IFormField;
  value: unknown;
  onChange: (value: unknown) => void;
  error?: string[];
  disabled?: boolean;
  metadata?: Record<string, unknown>;
}

// Validation System
export interface IValidator {
  validate(value: unknown, context: IValidationContext): Promise<IValidationResult>;
}

export interface IFieldValidator extends IValidator {
  validateField(value: unknown, field: IFormField, context: IValidationContext): Promise<IValidationResult>;
}

export interface IValidationContext {
  formValues: Record<string, unknown>;
  fieldConfig: IFormField;
  metadata?: Record<string, unknown>;
}

export interface IValidationResult {
  valid: boolean;
  errors: string[];
  warnings?: string[];
  info?: string[];
  metadata?: Record<string, unknown>;
}

// State Management
export interface IFormState {
  values: Record<string, unknown>;
  errors: Record<string, string[]>;
  touched: Record<string, boolean>;
  dirty: Record<string, boolean>;
  metadata?: Record<string, unknown>;
}

// Field Validation
export interface IFieldValidation {
  type: string;
  params?: Record<string, unknown>;
  message: string;
  level?: ValidationLevel;
  condition?: ICondition;
}

// Events
export interface IFormEvent {
  type: FormEventType;
  field?: string;
  value?: unknown;
  metadata?: Record<string, unknown>;
}

export type FormEventType = 
  | 'field-change'
  | 'form-submit'
  | 'form-reset'
  | 'validation-start'
  | 'validation-end'
  | 'dependency-triggered';