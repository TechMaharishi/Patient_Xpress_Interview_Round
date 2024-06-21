import React from 'react';
import Form from 'react-bootstrap/Form';
import FormItem from './FormItem';

const OtherTemplateDesigner = () => {
  return (
    <Form>
      <FormItem label="Email Designer" buttonLabel="Edit" />
      <FormItem label="SMS Designer" buttonLabel="Edit" />
      <FormItem label="Notes Designer" buttonLabel="Edit" />
    </Form>
  );
};

export default OtherTemplateDesigner;
