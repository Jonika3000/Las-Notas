import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const csrf = () => axios.get('/sanctum/csrf-cookie');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const getUser = async () => {
        const { data } = await axios.get('/api/user');
        setUser(data);
    }
    const register = async ({ ...data }) => {
        await csrf();
        try {
            await axios.post('/register', data);
            getUser();
            navigate("/");
        }
        catch (e) {
            if (e.response.status == 422) {
                setErrors(e.response.data.errors);
            }
        }
    }
    const login = async ({ ...data }) => {
        await csrf();
        try {
            await axios.post('/login', data);
            getUser();
            navigate("/");
        }
        catch (e) {
            if (e.response.status == 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    return <AuthContext.Provider value={{ user, errors, getUser, login, register }}>
        {children}
    </AuthContext.Provider>
 
}

export default function useAuthContext(){
    return useContext(AuthContext);
}