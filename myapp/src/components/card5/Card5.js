import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Card5() {
  const [email, setEmail] = useState("");
  return (
    <div className="container">
      <h1>Card 5</h1>
      <p>Ini email: {email}</p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Card5;
