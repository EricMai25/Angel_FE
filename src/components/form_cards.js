import { Form, Card } from 'react-bootstrap';
function FormCards({ url, pos }) {
  return (
    <div>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group controlId="formGroupUrl">
              <Form.Label>AngelList Url</Form.Label>
              <Form.Control
                placeholder="Enter Job Url"
                onBlur={(e) => {
                  console.log('hello');
                  url(e.target.value, pos);
                }}
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FormCards;
