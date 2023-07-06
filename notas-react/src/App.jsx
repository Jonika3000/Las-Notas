import './App.css'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './components/default-layout/default-layout.jsx'
import HomePage from './components/home-page/home-page.jsx'
import LoginPage from './components/login-page/login-page.jsx'

function App() { 
  return (
    <>
    <Routes>
        <Route path="/" element={<DefaultLayout/>}>
           <Route index element={<HomePage/>}/>
           <Route path='login' element={<LoginPage/>}></Route>
        </Route>
    </Routes>
    </>
  )
}

export default App
