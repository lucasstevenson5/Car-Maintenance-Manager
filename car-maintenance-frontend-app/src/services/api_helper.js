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


// ================== USERS ==================

// goes to http://localhost:3001/profile and gets info from cars and users in database
export const rendProf = async (rendData) => {
    const resp = await api.get("/profile", rendData);
    return resp.data;
}

// goes to http://localhost:3001/profile and updates profile info of users in database
export const updateProf = async (updateData) => {
    const resp = await api.put("/profile", updateData);
    return resp.data;
}

// goes to http://localhost:3001/profile and delets profile from users in database
export const deleteProf = async () => {
    await api.delete("/profile");
    return;
}


// ================== CARS ==================

// goes to http://localhost:3001/car/new and adds a new car to the database tied to that user's id
export const postCar = async (addData) => {
    const resp = await api.post("/car/new", addData);
    return resp.data;
}

// goes to http://localhost:3001/car/:index and edits the car based on the index which is tied to the id of the car
export const updateCar = async (index, updateData) => {
    const resp = await api.put(`/car/${index}`, updateData);
    return resp.data;
}


export const deleteCar = async (index) => {
    await api.delete(`/car/${index}`);
    return;
}

// goes to http://localhost:3001/dar/:index and gets info from cars and users in database
export const rendCar = async (index, rendData) => {
    const resp = await api.get(`/car/${index}`, rendData);
    return resp.data;
}