'use client'
import { FC } from "react";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { fetchCategory } from '../../API/API';


interface ProduitsProps {

}
interface Category {
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
                        <article>
                            <Link href={'/Category/' + category.category_name} ><p>{category.category_name}</p></Link>
                        </article>
                    ))) : (
                    <article>
                        <Link href="/Vide"><p>Vide</p></Link>
                    </article>
                )}
                {/* 
                <article>
                    <Link href="/Cosmetiques"><p>Produits cosmetique</p></Link>
                </article>

                <article>
                    <Link href="/Vetement"><p>Vetement</p></Link>
                </article>
                 */}

            </aside>
        </main>
    </div>
}

export default Produits;