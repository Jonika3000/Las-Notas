import { Button, Form } from 'react-bootstrap';
import './register-page.css'
import { useState } from 'react';
import useAuthContext from '../../context/auth-context';

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState(""); 
    const { register, errors } = useAuthContext();

    const handleSubmit = async (event) => {
        event.preventDefault();
        register({name,email,password,password_confirmation});
    };

    return (
        <div className="RegisterWrapper">
            <div className='RegisterBox'>
                <div>
                    <h1>Hello, stranger</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='enter email'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                NickName
                            </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='enter nick'
                                name='nick'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            /> 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='enter password'
                                name='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            /> 
                        </Form.Group> 
                        <Form.Label className='smallLabel'>
                            Min 6 numbers
                        </Form.Label>
                        <Form.Group>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                type='password'
                                required
                                name='Password2'
                                placeholder='enter password'
                                value={password_confirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                            /> 
                        </Form.Group>
                        <Button type='submit'>Register</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default RegisterPage;