import './App.css'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/default-layout/default-layout.jsx'
import HomePage from './components/home-page/home-page.jsx'
import LoginPage from './components/login-page/login-page.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from './components/register-page/register-page'

function App() { 
  return (
    <>  
    <Routes>
        <Route path="/" element={<DefaultLayout/>}>
           <Route index element={<HomePage/>}/>
           <Route path='login' element={<LoginPage/>}></Route>
           <Route path='register' element={<RegisterPage></RegisterPage>}/>
        </Route>
    </Routes>
    </>
  )
}

export default App
