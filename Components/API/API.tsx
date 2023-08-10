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

export async function fetchCart() {
    try {
        const response = await axios.get('http://localhost:8000/api/cart');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchOrder() {
    try {
        const response = await axios.get('http://localhost:8000/api/order');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchOrderDetail() {
    try {
        const response = await axios.get('http://localhost:8000/api/orderdetail');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchInvoiceDetail() {
    try {
        const response = await axios.get('http://localhost:8000/api/invoicedetail');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function fetchInvoice() {
    try {
        const response = await axios.get('http://localhost:8000/api/invoice');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}