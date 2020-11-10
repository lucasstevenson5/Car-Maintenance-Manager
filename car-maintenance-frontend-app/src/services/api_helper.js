import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3001"
})

// ================== AUTH ==================

// goes to http://localhost:3001/auth/signup
export const registerUser = async (registerData) => {
    const resp = await api.post("/auth/signup", registerData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

// goes to http://localhost:3001/auth/login
export const loginUser = async (loginData) => {
    const resp = await api.post("/auth/login", loginData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

// goes to http://localhost:3001/auth
export const verifyUser = async() => {
    const token = localStorage.getItem('authToken');

    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get("/auth/verify");
        return resp.data;
    }
    return false;
}


// ================== PROFILE ==================

// goes to http://localhost:3001/profile
export const rendProf = async (rendData) => {
    const resp = await api.get("/profile", rendData);
    return resp.data;
}