# Project overview

Your goal is to build a configurable form engine that allows you to create dynamic forms using JSON configuration. The JSON config schema is based on the JSON Schema Draft 7. The form engine will be built using Next.js and Material-UI. 

## Goals

- On top of JSON schema Draft 7, define a json config schema that can be used to create a form
- Based on the json config schema, create a type definition for the json config
- Using the best practices of functional programming, build a json config resolver that can be used to create a form
- Using the prepared form input components to render the form fields

## Requirements

- The json config schema should be based on JSON schema Draft 7
- The json config schema is able to define conditional rendering
- The json config schema is able to define conditional validation
- The json config schema for UI rendering should be decoupled from the json config schema for validation


# technologies

- [react-hook-form](https://react-hook-form.com/)
- [zod](https://zod.dev/)
- [MUI](https://mui.com/)
- [dayjs](https://day.js.org/)
- [lodash](https://lodash.com/)
- [json schema](https://json-schema.org/overview/what-is-jsonschema)

# Core functionalites

## 1. create json config schema definition

- define a json schema rule that can be used to define a form configuration
- resolve the json config schema to a type definition
- create a json config resolver that can be used to create a form with the best practices of dependency inversion principle


## 2. render form fields

- the form engine will render the form fields based on the json config and show them in the form
- the form fields will be rendered using the FormTextField, FormNumberField, FormSelector, FormCheckbox, FormRadioGroup, FormDatepicker, FormAutocomplete
- the form can be renderd conditionally depends on internal state or external state.

## 3. validate form fields

- the form engine will validate the form fields based on the validation rules in the json config
- the form validation rules will be resolved to a type definition
- the form validation rules will be validated using the different validation engines, such as zod


# Form components

- [FormTextField](/components/form/textfield)
- [FormNumberField](/components/form/numberfield)
- [FormSelector](/components/form/selector)
- [FormCheckbox](/components/form/checkbox)
- [FormRadioGroup](/components/form/radiogroup)
- [FormDatepicker](/components/form/datepicker)
- [FormAutocomplete](/components/form/autocomplete)

# Best practices

- function currying
- function memoization
- function composition
- dependency inversion principle
- reusable components
- resuable functions
- tree-shaking
  - use `/* #__PURE__ */` annotation to improve tree-shaking and potentially reduce bundle size by marking functions as side-effect free
- naming convention standard
  - use camelCase for function names
  - use PascalCase for class names
  - use snake_case for variable names
  - use kebab-case for HTML element IDs
  - use kebab-case for CSS class names

# Example

## fields

- "requestName":
  - always displayed
  - required when the form saved as draft
  - required when the form saved as submit
  - max: 255
- "dueDateFinalCerficate":
  - always displayed
  - optional when the form saved as draft
  - required when the form saved as submit
  - future date
- "collectionMethod":
  - always displayed
  - required when the form saved as draft
  - required when the form saved as submit
- "certificateDeliveryMethod":
  - displayed when "collectionMethod" is "Delivery"
  - optional when the form saved as draft
  - required when "collectionMethod" is "Delivery" and the form saved as submit
- "digitalScanRequired":
  - display when certificateType is "ORGANICS"
  - optional when the form saved as draft
  - required when certificateType is "ORGANICS" and the form saved as submit
- "copies":
  - number input
    - integer
    - min: 1
    - max: 10
  - display when digitalScanRequired is true
  - optional when the form saved as draft
  - required when digitalScanRequired is true and the form saved as submit
