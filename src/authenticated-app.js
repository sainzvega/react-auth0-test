import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Dashboard() {
  return <div>This is the dashboard page</div>;
}

function ProtectedPage() {
  return <div>This is the protexted page 1</div>;
}

function AnotherProtectedPage() {
  return <div>This is another protected page</div>;
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

function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Dashboard />
      </Route>
      <Route path="/protected-page">
        <ProtectedPage />
      </Route>
      <Route path="/another-protected-page">
        <AnotherProtectedPage />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}

function AuthenticatedApp() {
  return (
    <Router>
      <Header />
      <Content>
        <Routes />
      </Content>
      <Footer>Testing props</Footer>
    </Router>
  );
}

export default AuthenticatedApp;
