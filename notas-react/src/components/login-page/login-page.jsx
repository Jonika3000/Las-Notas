import { Form } from 'react-bootstrap';
import './login-page.css'

const LoginPage = ()=>{
    const handleSubmit = (event) => {
        event.preventDefault();
        
    };
    return(
        <div className="LoginWrapper">
            <div className='LoginBox'>
                <div>
                    <h1>Welcome, again</h1>
                    <Form onSubmit={handleSumbit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type='text'
                            placeholder='enter email'
                            name='email'
                            required>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='enter password'
                                name='password'
                                required>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div> 
            </div>
        </div>
    );
}
export default LoginPage;