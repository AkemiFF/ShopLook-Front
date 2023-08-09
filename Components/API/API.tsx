import axios from 'axios';

export async function fetchAllData() {
    try {
        const response = await axios.get('http://localhost:8000/api/');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
