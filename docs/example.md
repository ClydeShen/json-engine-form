# Example

## How to use

```tsx
import { FormTextField } from "@components/FormTextField";
import { createForm } from "json-engine-form";
import { FormProvider } from "react-hook-form";

const components = {
  text: (props: any) => <FormTextField {...props} />,
  number: (props: any) => <FormTextField {...props} />,
  select: (props: any) => <FormTextField {...props} />,
  checkbox: (props: any) => <FormTextField {...props} />,
  radio: (props: any) => <FormTextField {...props} />,
  date: (props: any) => <FormTextField {...props} />,
  autocomplete: (props: any) => <FormTextField {...props} />,
};
const {
  store: formStatus,
  context,
  zodResolver,
  defaultValues,
  renderFormFeilds,
} = createForm("config.json");

const Page = () => {
  const method = useForm({
    context,
    resolver: zodResolver,
    defaultValues,
  });
  return (
    <FormProvider {...method}>{renderFormFeilds({ components })}</FormProvider>
  );
};
```
