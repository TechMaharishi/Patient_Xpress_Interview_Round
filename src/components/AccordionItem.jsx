import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../App.css';

const AccordionItem = ({ eventKey, title, children }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header className="custom-accordion-header">{title}</Accordion.Header>
      <Accordion.Body>{children}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItem;
