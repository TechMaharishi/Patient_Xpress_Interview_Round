import React from 'react';
import Form from 'react-bootstrap/Form';
import FormItem from './FormItem';

const FormTemplateDesigner = () => {
  return (
    <Form>
      <FormItem label="Medical Designer" buttonLabel="Edit" />
      <FormItem label="Dental Designer" buttonLabel="Edit" />
      <FormItem label="Responsive Party Registration Designer" buttonLabel="Edit" />
      <FormItem label="Consent Form Designer" buttonLabel="Edit" />
      <FormItem label="Verify Insurance Designer" buttonLabel="Edit" />
    </Form>
  );
};

export default FormTemplateDesigner;
