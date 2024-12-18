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
const Page = () => {
  const {
    store: formStatus,
    context,
    resolver,
    defaultValues,
    renderFormFeilds,
  } = createForm("json-config.json");
  const method = useForm({
    context,
    resolver,
    defaultValues,
  });
  return (
    <FormProvider {...method}>
      {renderFormFeilds({ components })}
    </FormProvider>
  );
};
