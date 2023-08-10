import axios from 'axios';

// const HOST = "http://localhost:8000/"
const HOST = "https://akemiff.pythonanywhere.com/"


export async function fetchAllData() {
    try {
        const response = await axios.get(`${HOST}api/`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchCategory() {
    try {
        const response = await axios.get(`${HOST}api/category`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchProduct() {
    try {
        const response = await axios.get(`${HOST}api/products`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchCart() {
    try {
        const response = await axios.get(`${HOST}api/cart`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchOrder() {
    try {
        const response = await axios.get(`${HOST}api/order`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchOrderDetail() {
    try {
        const response = await axios.get(`${HOST}api/orderdetail`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchInvoiceDetail() {
    try {
        const response = await axios.get(`${HOST}api/invoicedetail`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchInvoice() {
    try {
        const response = await axios.get(`${HOST}api/invoice`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}