'use client'
import { useEffect, useState } from 'react';
import { fetchProduct } from '../API/API';
import { useRouter } from 'next/router';


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
    const urlParams = new URLSearchParams(window.location.search);
    const productId = Number(urlParams.get('id'));
    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchProduct();
                setProducts(response);

                const selectedProduct = products.find(product => product.id === productId);

                setProduct(selectedProduct || null);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [productId]);

    if (!product) {
        return <p>Chargement en cours...</p>;
    }


    return (
        <div>
            <figure key={productId} className="w-25 bg-light shadow-sm p-3 text-center">
                <picture className="d-flex justify-center gap-5">
                    <i className="bi-heart"></i>
                </picture>
                <picture className="bg-body-secondary">
                    <p className="fw-semibold">{product.product_name}</p>
                    <img src={product.image} alt={'image' + ' ' + product.product_name} />
                </picture>
                <figcaption>
                    <p>{product.description}</p>
                    <p> <strong>Prix {product.price}$</strong></p>
                </figcaption>
            </figure>
        </div>
    );
}



export default Produits;