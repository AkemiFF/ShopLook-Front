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
export async function fetchCategory() {
    try {
        const response = await axios.get('http://localhost:8000/api/category');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchProduct() {
    try {
        const response = await axios.get('http://localhost:8000/api/products');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
