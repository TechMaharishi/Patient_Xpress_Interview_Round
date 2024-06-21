import React, { useState } from 'react';
import { Form, Button, Row, Col, FormCheck } from 'react-bootstrap';
import FormItem from './FormItem';

const TreatmentPlanConfiguration = () => {
  const [payNowVisibility, setPayNowVisibility] = useState(false);
  const [hideToothChart, setHideToothChart] = useState(false);
  const [columnsDisabled, setColumnsDisabled] = useState({
    Tooth: false,
    Surface: false,
    Fee: false,
    Allowed: false,
    PriIns: false,
    SecIns: false,
    Code: false,
    Discount: false
  });

  const handleTogglePayNowVisibility = () => setPayNowVisibility(!payNowVisibility);
  const handleToggleHideToothChart = () => setHideToothChart(!hideToothChart);

  const handleColumnChange = (column) => {
    setColumnsDisabled(prevState => ({
      ...prevState,
      [column]: !prevState[column]
    }));
  };

  const handleUpdateColumns = () => {
    alert('Columns updated');
  };

  return (
    <Form>
      <FormItem label="Payment plan" buttonLabel="Edit" />
      <FormItem
        label="Pay now button visibility"
        isToggle={true}
        toggleValue={payNowVisibility}
        onToggleChange={handleTogglePayNowVisibility}
        isSimpleToggle={true}
      />
      <FormItem
        label="Hide tooth chart"
        isToggle={true}
        toggleValue={hideToothChart}
        onToggleChange={handleToggleHideToothChart}
        isSimpleToggle={true}
      />
      <Form.Group className="mb-3">
        <Form.Label>Treatment Plan Column Disable</Form.Label>
        <Row>
          {Object.keys(columnsDisabled).map(column => (
            <Col key={column} xs={6} md={4}>
              <FormCheck
                type="checkbox"
                label={column}
                checked={columnsDisabled[column]}
                onChange={() => handleColumnChange(column)}
              />
            </Col>
          ))}
        </Row>
        <Button variant="primary" onClick={handleUpdateColumns} className="mt-3">
          Update
        </Button>
      </Form.Group>
    </Form>
  );
};

export default TreatmentPlanConfiguration;
