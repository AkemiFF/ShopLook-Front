import { FC } from "react";
import Link from "next/link";

interface ProduitsProps {

}

const Produits: FC<ProduitsProps> = ({ }) => {
    return <div>
        <main>
            <aside className="Aside fixed-start bg-light shadow-sm d-flex flex-col">
                <article>
                    <Link href="/Cosmetiques"><p>Produits cosmetique</p></Link>
                </article>

                <article>
                <Link href="/Vetement"><p>Vetement</p></Link>
                </article>

                <article>
                <Link href="/Art"><p>Art</p></Link>
                </article>

                <article>
                <Link href="/Tennis"><p>Tennis</p></Link>
                </article>

                <article>
                <Link href="/Bijoux"><p>Bijoux</p></Link>
                </article>

            </aside>
        </main>
    </div>
}

export default Produits;