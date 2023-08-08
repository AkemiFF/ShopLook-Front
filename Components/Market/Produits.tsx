'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    product_name: string;
    reference: string;
    price: number;
    stock: number;
    description: string;
    image: string;
    category: number;
}

function Produits() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/products/');
                setProducts(response.data);
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {products && products.length > 0 ? (
                products.map((product, index) => (
                    <figure key={index} className="w-25 bg-light shadow-sm p-3 text-center">
                        <picture className="d-flex justify-center gap-5">
                            <i className="bi-heart"></i>
                        </picture>
                        <picture className="bg-body-secondary">
                            <p className="fw-semibold">{product.product_name}</p>
                        </picture>
                        <figcaption>
                            <p>{product.description}<br /> <strong>Prix {product.price}$</strong></p>
                        </figcaption>
                    </figure>
                ))
            ) : (
                <p>Aucun produit disponible.</p>
            )}
        </div>
    );
}



export default Produits;