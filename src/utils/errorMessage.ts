// handle required, min, max, pattern, date future, date past
export const ErrorMessage = {
  required: () => `please fill this field`,
  min: (min: number) => `minimum ${min} characters`,
  max: (max: number) => `maximum ${max} characters`,
  pattern: () => `invalid format`,
  date: {
    future: () => `date must be in the future`,
    past: () => `date must be in the past`,
  },
};
