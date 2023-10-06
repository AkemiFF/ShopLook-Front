'use client'
import { useEffect, useState } from 'react';
import { fetchProduct } from '../API/API';
import Link from "next/link";


interface BijouxProps {

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


function Produits() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProduct();
            setProducts(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <main>
                <div className="produit-accueil me-3 p-lg-3 bg-light">
                    {products && products.length > 0 ? (
                        products.map((product, index) => (
                            <figure key={product.id} className="w-25 bg-light shadow-sm p-3 text-center article-element">
                                <picture className="d-flex justify-center gap-5">
                                    <i className="bi-heart"></i>
                                </picture>
                                <picture className="bg-body-secondary">
                                    <p className="fw-semibold">{product.product_name}</p>
                                    <img src={product.image} alt={'image' + ' ' + product.product_name} />

                                </picture>
                                <figcaption>
                                    {/* mettre dans le détail du produit : {product.description}<br /> */}
                                    <p> <strong>Prix {product.price}$</strong></p>
                                    <Link href={`/DetailProduit?id=${product.id}`}>
                                        <p>Voir le produits <i className="bi-arrow-right"></i></p>
                                    </Link>
                                </figcaption>
                            </figure>
                        ))
                    ) : (
                        <p>Aucun produit disponible.</p>
                    )}
                </div>
            </main >
        </div >
    );
}



export default Produits;