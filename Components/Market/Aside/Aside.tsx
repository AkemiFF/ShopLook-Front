'use client'
import { FC } from "react";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { fetchCategory } from '../../API/API';
// import Trier from '../Produits'

interface ProduitsProps {

}

interface Category {
    id: number;
    category_name: string;

}

const Produits: FC<ProduitsProps> = ({ }) => {
    const [category, setCategory] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCategory();
            setCategory(data);
        };

        fetchData();
    }, []);

    return <div>
        <main>
            <aside className="Aside fixed-start bg-light shadow-sm d-flex flex-col">

                {category && category.length > 0 ? (
                    category.map((category, index) => (
                        <article key={category.id}>
                            {/* <button name={category.category_name} onClick={Trier(category.category_name)}><p>{category.category_name}</p></button> */}
                            <Link href={`/Category?cat=${category.id}`}><p>{category.category_name}</p></Link>
                        </article>
                    ))) : (
                    <article>
                        <Link href="/"><p>Vide</p></Link>
                    </article>
                )}

            </aside>
        </main>
    </div>
}

export default Produits;