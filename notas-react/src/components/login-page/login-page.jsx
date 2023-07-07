import { Button, Form } from 'react-bootstrap';
import './login-page.css'
import { useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 
   
    const handleSubmit = async (event) => {
        event.preventDefault(); 
        try { 
           await axios.post('/login',{email,password});
           setEmail("");
           setPassword("");
            navigate("/");
        }
        catch (error) {
            console.log(error);
        }  
    };
 
    return (
        <div className="LoginWrapper">
            <div className='LoginBox'>
                <div>
                    <h1>Welcome, again</h1>
                    <Form onSubmit={handleSubmit}> 
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='enter email'
                                name='email'
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                                required>
                            </Form.Control>
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='enter password'
                                name='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                        <Button type='submit'>Login</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;