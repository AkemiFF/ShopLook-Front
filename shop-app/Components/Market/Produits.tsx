import { FC } from "react";


interface ProduitsProps {

}

const Produits: FC<ProduitsProps> = ({ }) => {
    return <div>
        <main>
        <div className="produit-accueil me-3 p-lg-3 bg-light">
            Produits cosmetiques
        </div>
        </main>
    </div>
}

export default Produits;