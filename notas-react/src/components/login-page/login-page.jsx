import { Button, Form } from 'react-bootstrap';
import './login-page.css'
import { useState } from 'react'; 
import useAuthContext from '../../context/auth-context';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login, errors} = useAuthContext();


    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setEmail("");
        setPassword("");
        login({ email, password })
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