import axios from 'axios';

const BASE_URL = 'http://localhost:3141';  // Adjust this to your Django backend URL

export const apiClient = {
    async login(email: string, password: string) {
        try {
            const response = await axios.post(`${BASE_URL}/api/token/login/`, {
                email,
                password
            });
            return response.data;
        } catch (error:any) {
            console.log(error);
            throw error?.response?.data?.detail || 'Login failed.';
        }
    },

    // Other API calls can be added here. For example:
    async signup(userData: any) {
        try {
            const response = await axios.post(`${BASE_URL}/api/register/`, userData);
            return response.data;
        } catch (error:any) {
            throw error?.response?.data?.detail || 'Signup failed.';
        }
    },

    async fetchProfile(token: string) {
        try {
            const response = await axios.get(`${BASE_URL}/api/profile/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error:any) {
            throw error?.response?.data?.detail || 'Fetching profile failed.';
        }
    }
}

export default apiClient;