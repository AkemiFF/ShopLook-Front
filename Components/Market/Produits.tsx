'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Product {
    product_name: string;
    price: number;
    description: string;
    image: string;
}

function Produits() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/products/');
                setProducts(response.data.products);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {products.map((product, index) => (
                <figure className="w-25 bg-light shadow-sm p-3 text-center">
                    <picture className="d-flex justify-center gap-5">
                        <p className="bg-primary text-light pe-3 ps-3">{product.product_name}</p>
                        <i className="bi-heart"></i>
                    </picture>
                    <picture className="bg-body-secondary">
                        <p className="fw-semibold">Image</p>
                    </picture>
                    <figcaption>
                        <p>Produit <br /> <strong>Prix 0.00$</strong></p>
                    </figcaption>
                </figure>
            ))}

        </div>
    );
}



export default Produits;