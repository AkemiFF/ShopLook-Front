import { FC } from "react";
import Link from "next/link";

interface AccueilProps {
    
}
 
const Accueil: FC<AccueilProps> = ({}) => {
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
                    <figure className="w-25 bg-light shadow-sm p-3 text-center">
                    <picture className="d-flex justify-center gap-5">
                            <p className="bg-primary text-light pe-3 ps-3">Neuf</p>
                            <i className="bi-heart"></i>
                        </picture>
                        <picture className="bg-body-secondary">
                            <p className="fw-semibold">Image</p>
                        </picture>
                        <figcaption>
                            <p>Produit <br /> <strong>Prix 0.00$</strong></p>
                        </figcaption>
                    </figure>
                    <figure className="w-25 bg-light shadow-sm p-3 text-center">
                    <picture className="d-flex justify-center gap-5">
                            <p className="bg-primary text-light pe-3 ps-3">Neuf</p>
                            <i className="bi-heart"></i>
                        </picture>
                        <picture className=" bg-body-secondary">
                            <p className="fw-semibold">Image</p>
                        </picture>
                        <figcaption>
                            <p>Produit <br /> <strong>Prix 0.00$</strong></p>
                        </figcaption>
                    </figure>
                    <figure className="w-25 bg-light shadow-sm p-3 text-center">
                    <picture className="d-flex justify-center gap-5">
                            <p className="bg-primary text-light pe-3 ps-3">Neuf</p>
                            <i className="bi-heart"></i>
                        </picture>
                        <picture className=" bg-body-secondary">
                            <p className="fw-semibold">Image</p>
                        </picture>
                        <figcaption>
                            <p>Produit <br /> <strong>Prix 0.00$</strong></p>
                        </figcaption>
                    </figure>
                    <figure className="w-25 bg-light shadow-sm p-3 text-center">
                    <picture className="d-flex justify-center gap-5">
                            <p className="bg-primary text-light pe-3 ps-3">Neuf</p>
                            <i className="bi-heart"></i>
                        </picture>
                        <picture className=" bg-body-secondary">
                            <p className="fw-semibold">Image</p>
                        </picture>
                        <figcaption>
                            <p>Produit <br /> <strong>Prix 0.00$</strong></p>
                        </figcaption>
                    </figure>
                    <figure className="w-25 bg-light shadow-sm p-3 text-center">
                    <picture className="d-flex justify-center gap-5">
                            <p className="bg-primary text-light pe-3 ps-3">Neuf</p>
                            <i className="bi-heart"></i>
                        </picture>
                        <picture className=" bg-body-secondary">
                            <p className="fw-semibold">Image</p>
                        </picture>
                        <figcaption>
                            <p>Produit <br /> <strong>Prix 0.00$</strong></p>
                        </figcaption>
                    </figure>
                    <figure className="w-25 bg-light shadow-sm p-3 text-center">
                    <picture className="d-flex justify-center gap-5">
                            <p className="bg-primary text-light pe-3 ps-3">Neuf</p>
                            <i className="bi-heart"></i>
                        </picture>
                        <picture className=" bg-body-secondary">
                            <p className="fw-semibold">Image</p>
                        </picture>
                        <figcaption>
                            <p>Produit <br /> <strong>Prix 0.00$</strong></p>
                        </figcaption>
                    </figure>
                </article>
                <article className="text-center">
                   <Link href="/Services"><p>Voir tous les produits <i className="bi-arrow-right"></i></p></Link> 
                </article>
            </section>
         </main>
    </div>
}
 
export default Accueil;