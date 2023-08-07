import { FC } from "react";
import Link from "next/link";

interface SignUpProps {
    
}
 
const SignUp: FC<SignUpProps> = ({}) => {
    return <div>
         <div>
    <main className="Login-main d-flex flex-row justify-content-between bg-light me-3 ms-3">
      <section id="image-mobile">
        image
      </section>
      <section className="text-center bg-light">
        <p className="fs-3 fw-semibold">Inscrivez-vous</p>
        <p>Creer votre compte</p>
        <form action="">
          <article className="form-login d-flex flex-col gap-2">
            <span className="input-width rounded-1 p-1 bg-body-secondary">
              <i className="bi-person-fill fs-5 rounded-5"></i>
              <input type="text" placeholder="Nom d'utilisateur" className="p-2 bg-body-secondary"/></span>
              <span className="input-width rounded-1 p-1 bg-body-secondary">
              <i className="bi-envelope-fill fs-5 rounded-5"></i>
              <input type="text" placeholder="Email" className="p-2 bg-body-secondary"/></span>
              <span className="input-width rounded-1 p-1 bg-body-secondary">
              <i className="bi-lock-fill fs-5 rounded-5"></i>
              <input type="text" placeholder="Mot de passe" className="p-2 bg-body-secondary"/></span>
              <span className="input-width rounded-1 p-1 bg-body-secondary">
              <i className="bi-lock-fill fs-5 rounded-5"></i>
              <input type="text" placeholder="Confirmer le mot de passe" className="p-2 bg-body-secondary"/></span>
              <label><input type="checkbox" className="input-check me-2"/><span>Accept terms et condition</span></label>
            <span><input type="submit" value="S'inscrire" className="button-width rounded-1 ps-2 pe-2 fw-semibold"/></span>
            <span><p>Vous avez deja un compte?<Link href="/Login"><span>Cliquez ici.</span></Link></p></span>
          </article>
        </form>
      </section>
    </main>
  </div>
    </div>
}
 
export default SignUp;