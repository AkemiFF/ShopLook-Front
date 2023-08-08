import { FC } from "react";
import Link from "next/link";

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return <div>
        <div>
    <footer className='bg-dark text-light p-lg-1 d-flex flex-col gap-2'>
     <section className='d-flex flex-row justify-content-between mt-2 ms-4 me-4'>
      <article className='d-flex flex-col'>
         <p className="fw-semibold fs-5">Contact</p>
         <p>Location: Antananarive,MADAGASCAR</p>
         <p>Telephone: +261340000000</p>
         <p>Email: shoplook@gmail.com</p>
      </article>
      <article className='d-flex flex-col'>
         <p className="fw-semibold fs-5">Lien actif</p>
         <Link href="/Home"><p>Mention legales</p></Link>
         <Link href="/"><p>Conditions d&apos;utilisation</p></Link>
         <Link href="/SignUp"><p>Creer un compte</p></Link>
      </article>
      <article className='d-flex flex-col'>
          <p className="fw-semibold fs-5">Produit</p>
          <Link href="/Home"><p>Vente</p></Link>
          <Link href="/Home"><p>Promotion</p></Link>
          <Link href="/Home"><p>Nouveau produits</p></Link>
      </article>
      <article className='d-flex flex-row-reverse'>
          <span className='bi-facebook fs-3'></span>
          <span className='bi-instagram fs-3'></span>
          <span className='bi-google fs-3'></span>
      </article>
     </section>
     <section className='text-center mt-3'>
      <p>Copyright_ShopLook.mg</p>
     </section>
    </footer>
  </div>
    </div>
}

export default Footer;