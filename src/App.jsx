import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from './components/AccordionItem';
import OnlineAppointmentConfiguration from './components/OnlineAppointmentConfiguration';
import FormsConfiguration from './components/FormsConfiguration';
import FormTemplateDesigner from './components/FormTemplateDesigner';
import OtherTemplateDesigner from './components/OtherTemplateDesigner';
import TreatmentPlanConfiguration from './components/TreatmentPlanConfiguration';
import OtherConfiguration from './components/OtherConfiguration';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='custom-accordion-container'>
      <div className="container mt-5">
        <Accordion defaultActiveKey="0">
          <AccordionItem eventKey="0" title="Online Appointment Configuration Form">
            <OnlineAppointmentConfiguration />
          </AccordionItem>
          <AccordionItem eventKey="1" title="Forms Configuration">
            <FormsConfiguration />
          </AccordionItem>
          <AccordionItem eventKey="2" title="Form Template Designer">
            <FormTemplateDesigner />
          </AccordionItem>
          <AccordionItem eventKey="3" title="Other Template Designer">
            <OtherTemplateDesigner />
          </AccordionItem>
          <AccordionItem eventKey="4" title="Treatment Plan Configuration">
            <TreatmentPlanConfiguration />
          </AccordionItem>
          <AccordionItem eventKey="5" title="Other Configuration">
            <OtherConfiguration />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
