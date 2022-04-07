import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleEmailChange = e => {
   setEmail(e.target.value); 
  }

  const handlePasswordChange = e => {
    setPass(e.target.value)
  }

  const handleFormSubmit = e => {
    createUserWithEmailAndPassword(auth, email, pass)
    .then(resutl => {
      const user = resutl.user;
      console.log(user);
    })
    .catch(error => {
      console.error(error)
    })
    e.preventDefault();
  }
  return (
    <div>
      <Form onSubmit={handleFormSubmit} className='container mt-5'>
        <h2 className='text-primary text-center fw-bold'>Please Register</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
        </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>
  );
}

export default App;
