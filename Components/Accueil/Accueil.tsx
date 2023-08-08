'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FC } from "react";
import Link from "next/link";

interface AccueilProps {

}

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

const Accueil: FC<AccueilProps> = ({ }) => {

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

    return <div>
        <main>
            <section className="Accueil bg-light text-light p-lg-5 ms-5 me-5 shadow-sm">
                <picture>
                    <p>Welcome to our humble site web <b>IMAGE BACKGROUND</b></p>
                </picture>
            </section>
            <section className=" mt-3 mb-3 pt-3">
                <article>
                    <p className="text-center h4 fw-bold mb-4">Nos produits</p>
                </article>
                <article className="d-flex flex-row flex-wrap gap-5 justify-content-center">
                    {products && products.length > 0 ? (
                        products.map((product, index) => (
                            <figure key={index} className="w-25 bg-light shadow-sm p-3 text-center">
                                <picture className="d-flex justify-center gap-5">
                                    <i className="bi-heart"></i>
                                </picture>
                                <picture className="bg-body-secondary">
                                    <p className="fw-semibold">{product.product_name}</p>
                                    <img src={product.image} alt={'image' + ' ' + product.product_name} />
                                </picture>
                                <figcaption>
                                    <p>{product.description}<br /> <strong>Prix {product.price}$</strong></p>
                                </figcaption>
                            </figure>
                        ))
                    ) : (
                        <p>Aucun produit disponible.</p>
                    )}

                </article>
                <article className="text-center">
                    <Link href="/Services"><p>Voir tous les produits <i className="bi-arrow-right"></i></p></Link>
                </article>
            </section>
        </main>
    </div>
}

export default Accueil;