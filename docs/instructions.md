# Project overview
Your goal is to build a form engine that allows you to create dynamic forms using JSON configuration.The form engine will be built using Next.js and Material-UI, and it will allow you to create forms with custom fields and validation rules. User will provide the form configuration as a JSON object, and the form engine will generate the form based on the configuration.

The form engine will have the following features:
- Dynamic form creation
- Custom fields
- Validation rules
- Error handling
- Form submission

# technologies
- [react-hook-form](https://react-hook-form.com/)
- [zod](https://zod.dev/)
- [json-rule-engine](https://github.com/cachecontrol/json-rules-engine) 
- [MUI](https://mui.com/)
- [dayjs](https://day.js.org/)
- [lodash](https://lodash.com/)


# Core functionalites
## 1. parse json config
- there are some json config file under /src/json-config folder
- developer can copy the json config file as a template and modify it to create a new form

## 2. render form fields
- the form engine will render the form fields based on the json config and show them in the form
- the form fields will be rendered using the FormTextField, FormNumberField, FormSelector, FormCheckbox, FormRadioGroup, FormDatepicker, FormAutocomplete
- the layout of the form fields will be determined by the json config
- the form fields will be rendered in the order of the json config

## 3. validate form fields
- the form engine will validate the form fields based on the validation rules in the json config
- the validation rules will be evaluated in the order of the json config
- the validation rules should be written in json-rule-engine format

## 4. submit form fields
- the form will be save as draft when user click "Save as Draft" button
- the form will be save as submit when user click "Submit" button
- the form will be reset when user click "Discard" button
- console.log the form data when user click "Submit" button


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
