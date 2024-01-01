import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { setCookie } from "cookies-next";
import './login.css'

const adminUsername = import.meta.env.VITE_ADMIN_USERNAME as string;
const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD as string;

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username == adminUsername && password == adminPassword) {
      setCookie("auth-token", adminUsername);
      navigate("/");
    } else {
      alert("Wrong Password");
    }
  };

  return (
    <div className="align-items-center d-flex flex-column justify-content-center form-login">
      <Form
      className="form-login-2"
      onSubmit={handleFormSubmit}
    >
      <h2 style={{ marginBottom: "30px" }}>Admin Login</h2>
      <Form.Group as={Row} className="mb-3 form-group-login" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Username
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 form-group-login" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Col>
      </Form.Group>
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
    </div>
  );
}
