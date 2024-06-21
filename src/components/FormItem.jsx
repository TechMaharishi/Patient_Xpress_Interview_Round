import React from 'react';
import { Button, Form, FormCheck, FormControl, FormSelect } from 'react-bootstrap';

const FormItem = ({
  label,
  isToggle,
  toggleValue,
  onToggleChange,
  isTextInput,
  placeholder,
  isDropdown,
  dropdownOptions,
  buttonLabel,
  buttonAction,
  isSimpleToggle
}) => {
  return (
    <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
      <Form.Label>{label}</Form.Label>
      {isToggle ? (
        <FormCheck
          type="switch"
          checked={toggleValue}
          onChange={onToggleChange}
          className={isSimpleToggle ? '' : 'ms-auto'}
        />
      ) : isTextInput ? (
        <div className="d-flex">
          <FormControl type="text" placeholder={placeholder} />
          <Button variant="outline-primary" className="ms-3" onClick={buttonAction}>{buttonLabel}</Button>
        </div>
      ) : isDropdown ? (
        <div className="d-flex align-items-center">
          <FormSelect>
            {dropdownOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </FormSelect>
          <Button variant="outline-primary" className="ms-3" onClick={buttonAction}>{buttonLabel}</Button>
        </div>
      ) : (
        <Button variant="outline-primary" onClick={buttonAction}>{buttonLabel}</Button>
      )}
    </Form.Group>
  );
};

export default FormItem;
