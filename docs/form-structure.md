# Form Structure Documentation

## Overview
The form engine is designed following the Dependency Inversion Principle (DIP), ensuring high-level modules (form engine) depend on abstractions rather than concrete implementations (specific field types or validation rules).

## Core Abstractions

### IFormEngine
The main form engine interface that handles form generation, validation, and state management.

### IFieldRegistry
Responsible for registering and managing different field types.

### IValidationEngine
Handles form validation rules and error messages.

### IFormRenderer
Responsible for rendering form fields and layouts.

## Form Configuration Structure

```typescript
interface IFormConfig {
  id: string;
  title: string;
  description?: string;
  version: string;
  fields: IFormField[];
  validation?: IValidationRule[];
  layout?: IFormLayout;
  metadata?: Record<string, unknown>;
}

interface IFormField {
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

interface IFieldDependency {
  on: string;          // Field ID this dependency is based on
  type: 'visibility' | 'enablement' | 'value' | 'validation';
  condition: ICondition;
  action: IAction;
}

interface ICondition {
  type: 'equals' | 'notEquals' | 'contains' | 'greaterThan' | 'lessThan' | 'regex' | 'custom';
  value: unknown;
  metadata?: Record<string, unknown>;
}

interface IAction {
  type: 'show' | 'hide' | 'enable' | 'disable' | 'setValue' | 'clearValue' | 'setValidation' | 'custom';
  value?: unknown;
  metadata?: Record<string, unknown>;
}

interface IValidationRule {
  field: string;
  type: string;
  params?: Record<string, unknown>;
  message: string;
  level?: 'error' | 'warning' | 'info';
}

interface IFormLayout {
  type: 'single' | 'tabs' | 'sections' | 'wizard';
  sections?: ILayoutSection[];
  columns?: number;
  metadata?: Record<string, unknown>;
}
```

## Field Type Registry
Field types are registered through a plugin system, allowing for easy extension:

```typescript
interface IFieldTypePlugin {
  type: string;
  component: React.ComponentType<IFieldProps>;
  validator?: IFieldValidator;
  defaultProps?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}
```

## Validation Engine
Validation rules are processed through a pipeline of validators:

```typescript
interface IValidator {
  validate(value: unknown, context: IValidationContext): IValidationResult;
}

interface IValidationContext {
  formValues: Record<string, unknown>;
  fieldConfig: IFormField;
  metadata?: Record<string, unknown>;
}
```

## State Management
Form state is managed through a state manager that implements:

```typescript
interface IFormState {
  values: Record<string, unknown>;
  errors: Record<string, string[]>;
  touched: Record<string, boolean>;
  dirty: Record<string, boolean>;
  metadata?: Record<string, unknown>;
}
```

## Extension Points
The system provides several extension points:
1. Custom Field Types
2. Custom Validators
3. Custom Layout Engines
4. Custom State Management
5. Custom Rendering Strategies