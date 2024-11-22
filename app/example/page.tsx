'use client';

import { Container, Typography } from '@mui/material';
import DynamicForm from '@/components/DynamicForm';
import formConfig from '@/json-config/form-config.json';

export default function ExamplePage() {
  const handleSubmit = (data: Record<string, unknown>) => {
    // Handle form submission
  };

  const handleSaveDraft = (data: Record<string, unknown>) => {
    console.log('Form saved as draft:', data);
  };

  const handleDiscard = () => {
    console.log('Form discarded');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        {formConfig.title}
      </Typography>
      <DynamicForm
        config={formConfig}
        onSubmit={handleSubmit}
        onSaveDraft={handleSaveDraft}
        onDiscard={handleDiscard}
      />
    </Container>
  );
}
