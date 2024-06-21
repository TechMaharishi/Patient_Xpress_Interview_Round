import React, { useState } from 'react';
import { Form, Button, FormCheck, FormControl } from 'react-bootstrap';
import FormItem from './FormItem';

const OtherConfiguration = () => {
  const [skipPatientAuth, setSkipPatientAuth] = useState(false);
  const [otpUsernameAuth, setOtpUsernameAuth] = useState(false);
  const [officialWebsite, setOfficialWebsite] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [newKeyword, setNewKeyword] = useState('');

  const handleToggleSkipPatientAuth = () => setSkipPatientAuth(!skipPatientAuth);
  const handleToggleOtpUsernameAuth = () => setOtpUsernameAuth(!otpUsernameAuth);
  const handleToggleOfficialWebsite = () => setOfficialWebsite(!officialWebsite);

  const handleKeywordInputChange = (event) => setNewKeyword(event.target.value);

  const handleAddKeyword = () => {
    if (newKeyword.trim() !== '') {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const handleRemoveKeyword = (index) => {
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(index, 1);
    setKeywords(updatedKeywords);
  };

  const handleUpdateKeywords = () => {
    // Logic to handle updating keywords (e.g., saving to a backend)
    alert(`Keywords updated: ${keywords.join(', ')}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddKeyword();
    }
  };

  return (
    <Form>
      <FormItem label="Feedback Configuration" buttonLabel="Edit" />
      <FormItem
        label="Skip Patient Authentication"
        isToggle={true}
        toggleValue={skipPatientAuth}
        onToggleChange={handleToggleSkipPatientAuth}
      />
      <FormItem
        label="OTP or Username (Password authentication will not work if you enable this)"
        isToggle={true}
        toggleValue={otpUsernameAuth}
        onToggleChange={handleToggleOtpUsernameAuth}
      />
      <FormItem
        label="Official Website"
        isToggle={true}
        toggleValue={officialWebsite}
        onToggleChange={handleToggleOfficialWebsite}
      />
      <Form.Group className="mb-3">
        <Form.Label>Confirmation Keywords</Form.Label>
        <div className="d-flex align-items-center">
          <FormControl
            type="text"
            value={newKeyword}
            onChange={handleKeywordInputChange}
            placeholder="Hit enter to add a keyword"
            onKeyPress={handleKeyPress}
          />
          <Button variant="outline-primary" className="ms-3" onClick={handleAddKeyword}>
            Add
          </Button>
        </div>
        <div className="mt-2">
          {keywords.map((keyword, index) => (
            <Button
              key={index}
              variant="outline-secondary"
              className="me-2 mb-2"
              onClick={() => handleRemoveKeyword(index)}
            >
              {keyword} <span aria-hidden="true">&times;</span>
            </Button>
          ))}
        </div>
        <Button variant="primary" onClick={handleUpdateKeywords} className="mt-3">
          Update
        </Button>
      </Form.Group>
    </Form>
  );
};

export default OtherConfiguration;
