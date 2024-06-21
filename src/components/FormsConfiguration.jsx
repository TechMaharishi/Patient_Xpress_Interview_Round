import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormItem from './FormItem';

const FormsConfiguration = () => {
  const [formDurationEnabled, setFormDurationEnabled] = useState(false);
  const [autoAttachNPFormsEnabled, setAutoAttachNPFormsEnabled] = useState(false);

  const handleToggleFormDuration = () => setFormDurationEnabled(!formDurationEnabled);
  const handleToggleAutoAttachNPForms = () => setAutoAttachNPFormsEnabled(!autoAttachNPFormsEnabled);

  return (
    <Form>
      <FormItem label="Consent Form Mapping" buttonLabel="Edit" />
      <FormItem label="Configure Form Virtual Folder" buttonLabel="Edit" />
      <FormItem
        label="Configure Form Duration"
        isToggle={true}
        toggleValue={formDurationEnabled}
        onToggleChange={handleToggleFormDuration}
      />
      <FormItem
        label="Exclude Auto Attach NP Forms"
        isToggle={true}
        toggleValue={autoAttachNPFormsEnabled}
        onToggleChange={handleToggleAutoAttachNPForms}
      />
      <Form.Group className="mb-3">
        <Form.Label>News Pallet Forms</Form.Label>
        <FormItem
          label="Form List"
          isDropdown={true}
          dropdownOptions={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
          buttonLabel="Update"
        />
      </Form.Group>
      <FormItem label="Patient forms greeting message" buttonLabel="Edit" />
    </Form>
  );
};

export default FormsConfiguration;
