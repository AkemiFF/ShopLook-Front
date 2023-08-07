import { FC } from "react";

interface FormulaireProps {
    
}
 
const Formulaire: FC<FormulaireProps> = ({}) => {
    return <div>
         <main className="d-flex flex-row justify-content-between">
            <section className="para-formulaire">
                <article>
                    <p className="h3 fw-bold">Besoin d'aide</p>
                    <p>N'hesitez-pas a nous contacter</p>
                </article>
                <article>
                    <picture>
                        <p>image</p>
                    </picture>
                </article>
            </section>
            <section className="mt-3 bg-light p-lg-5 ms-5 me-5 shadow-sm w-50 mb-3">
                <article className="text-center">
                <picture>
                    <i className="bi-star"></i>
                    <i className="bi-star"></i>
                    <i className="bi-star"></i>
                </picture>
                <p>Formulaire de contact</p>
                </article>
                <article>
                    <form action="" className="d-flex flex-col gap-2">
                        <label htmlFor="" className="fw-semibold">Sujet</label>
                        <input type="text" className="p-2"/>
                        <label htmlFor="" className="fw-semibold">Nom</label>
                        <input type="text" className="p-2"/>
                        <label htmlFor="" className="fw-semibold">Adresse email</label>
                        <input type="text" className="p-2"/>
                        <label htmlFor="" className="fw-semibold">Message</label>
                        <textarea name="" id="" className="p-2">
                            Ecrivez..
                        </textarea>
                        <input type="submit" value="Envoyer" className="btn btn-primary" />
                    </form>
                </article>
            </section>
         </main>
    </div>
}
 
export default Formulaire;