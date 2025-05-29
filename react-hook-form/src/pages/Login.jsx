
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" name="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="button">
              Login
            </Button>
          </Form>
        </Col>
      </Row>

      <div className="text-center mt-3">
        <Button variant="info" onClick={goToRegister}>
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Login;
