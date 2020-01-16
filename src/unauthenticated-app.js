import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UnauthenticatedHeader } from "./Header";
import { UnauthenticatedContent } from "./Content";
import { UnauthenticatedFooter } from "./Footer";
import { useAuth } from "./context";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login({ email, password }).then(() => {
      debugger;
      console.log("success");
    });
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1>Login</h1>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Link to="/reset-password">Forgot password?</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

function ResetPassword() {
  const { login } = useAuth;
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1>Reset Password</h1>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={login}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

function Contact() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <h1>Contact Form</h1>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={() => console.log("contact submitted")}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Enter your feed back</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

function UnathenticatedRoutes() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Login />
      </Route>
      <Route path="/reset-password">
        <ResetPassword />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

function UnAuthenticatedApp() {
  return (
    <Router>
      <UnauthenticatedHeader />
      <UnauthenticatedContent>
        <UnathenticatedRoutes />
      </UnauthenticatedContent>
      <UnauthenticatedFooter />
    </Router>
  );
}

export default UnAuthenticatedApp;
