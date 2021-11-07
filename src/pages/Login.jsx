import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return matricule.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="matricule">
          <Form.Label>Matricule</Form.Label>
          <Form.Control
            autoFocus
            type="matricule"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Mot de Passe</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        
        <Link className="button bg-green-500" to="/home">
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Link>
      </Form>
    </div>
  );
}