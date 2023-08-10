'use client'
import { useEffect, useState } from 'react';
import { FC } from "react";
import { fetchProduct } from '../API/API'
import Link from "next/link";

interface PoduitsTrieProps {

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

const PoduitsTrie: FC<PoduitsTrieProps> = ({ }) => {

    const [products, setProducts] = useState<Product[]>([]);
    const urlParams = new URLSearchParams(window.location.search);
    const productCategory = Number(urlParams.get('cat'));
    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProduct();
            setProducts(data);

            const selectedProduct = products.find(product => product.category === productCategory);
            setProduct(selectedProduct || null);
            console.log('data = ', selectedProduct)
        };

        fetchData();
    }, []);

    if (!product) {

        return (
            <div>
                <main>
                    <div className="produit-accueil me-3 p-lg-3 bg-light"><p>Chargement en cours...</p>;
                    </div>
                </main >
            </div >
        )
    }

    return (
        <div>
            <main>
                <div className="produit-accueil me-3 p-lg-3 bg-light">

                    <figure key={product.id} className="w-25 bg-light shadow-sm p-3 text-center">
                        <picture className="d-flex justify-center gap-5">
                            <i className="bi-heart"></i>
                        </picture>
                        <picture className="bg-body-secondary">
                            <p className="fw-semibold">{product.product_name}</p>
                            <img src={product.image} alt={'image' + ' ' + product.product_name} />

                        </picture>
                        <figcaption>
                            <p> <strong>Prix {product.price}$</strong></p>
                            <Link href={`/DetailProduit?id=${product.id}`}>
                                <p>Voir le produits <i className="bi-arrow-right"></i></p>
                            </Link>
                        </figcaption>
                    </figure>
                </div>
            </main >
        </div >)
}

export default PoduitsTrie;