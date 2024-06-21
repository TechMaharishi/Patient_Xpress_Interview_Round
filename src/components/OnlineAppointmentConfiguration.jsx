import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormItem from './FormItem';

const OnlineAppointmentConfiguration = () => {
  const [calendarLimitEnabled, setCalendarLimitEnabled] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleToggleCalendarLimit = () => {
    setCalendarLimitEnabled(!calendarLimitEnabled);
    setShowSuccessMessage(false);
  };

  const handleUpdateCalendarLimit = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <Form>
      <FormItem label="Configure Online Schedule" buttonLabel="Edit" />
      <FormItem label="Configure Appointment Landing Page" buttonLabel="Edit" />
      <FormItem label="Online Booking Dashboard Note" buttonLabel="Edit" />
      <Form.Group>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <Form.Label>Set Calendar Limit (in months)</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Check
              type="switch"
              id="calendarLimitSwitch"
              label="Toggle Calendar Limit"
              checked={calendarLimitEnabled}
              onChange={handleToggleCalendarLimit}
            />
          </div>
        </div>

        {calendarLimitEnabled && (
          <div className="mt-3 d-flex justify-content-end">
            <Button variant="primary" onClick={handleUpdateCalendarLimit}>
              Update
            </Button>
          </div>
        )}
        <div>
          {showSuccessMessage && (
            <div className="text-success text-center mt-2 fw-bold">
              Updated successfully!
            </div>
          )}
        </div>
      </Form.Group>
    </Form>
  );
};

export default OnlineAppointmentConfiguration;
