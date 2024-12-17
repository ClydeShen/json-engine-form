// Type for the validation rules
interface ValidationRule {
    required?: boolean | {
        anyOf?: Array<ValidationRule>;
        allOf?: Array<ValidationRule>;
        if?: Condition;
        then?: ValidationRule;
        else?: ValidationRule;
        businessRules?: string; // Name of the business rule to apply
        params?: Record<string, any>; // Parameters for the business rule
        operator?: string; // For logical operations like equals, notEquals, etc.
        field?: string | string[]; // Field(s) to apply the rule to
        value?: any; // Value to compare against
    };
    maxLength?: number;
    minLength?: number;
    futureDate?: boolean;
    pattern?: string; // For regex validation
}

// Type for conditions in validation rules
interface Condition {
    operator: string; // e.g., "equals", "notEquals"
    field: string; // The field to check
    value: any; // The value to compare against
}

// Type for the validation messages
interface ValidationMessages {
    required?: string;
    maxLength?: string;
    minLength?: string;
    futureDate?: string;
    pattern?: string;
}

// Type for a field
interface Field<T = any> {
    _id: string;
    type: string; // e.g., "text", "select", "date", etc.
    label?: string;
    description?: string;
    required?: boolean | {
        anyOf?: Array<ValidationRule>;
        allOf?: Array<ValidationRule>;
        if?: Condition;
        then?: ValidationRule;
        else?: ValidationRule;
    };
    validation?: {
        rules?: ValidationRule;
        messages?: ValidationMessages;
    };
    layout?: {
        direction?: string;
        paddedLeft?: boolean;
    };
    typesense?: {
        collectionName: string;
        defaultAttributes?: boolean;
    };
    options?: T[]; // Generic options for select fields
}

// Type for a row
interface Row {
    label: string;
    description?: string;
    required?: boolean;
    type: string; // Added type property for Row
    fields: Field[];
}

// Type for a block
interface Block {
    title: string;
    description?: string;
    type: string; // Added type property for Block
    rows: Row[];
}

// Type for a section
interface Section {
    _id: string;
    title: string;
    description: string;
    blocks: Block[];
}

// Main type for the form schema
interface FormSchema {
    dependencies?: {
        propertyNames: string[];
    };
    sections: Section[];
}