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
        <p>Inscrivez-vous</p>
        <p>Creer votre compte</p>
        <form action="">
          <article className="form-login d-flex flex-col gap-2">
            <span>
              <i className="bi-person-fill text-primary rounded-5"></i>
              <input type="text" placeholder="Nom d'utilisateur" className="p-2 bg-body-secondary"/></span>
              <span>
              <i className="bi-envelope-fill text-primary rounded-5"></i>
              <input type="text" placeholder="Email" className="p-2 bg-body-secondary"/></span>
              <span>
              <i className="bi-lock-fill text-primary rounded-5"></i>
              <input type="text" placeholder="Mot de passe" className="p-2 bg-body-secondary"/></span>
              <span>
              <i className="bi-lock-fill text-primary rounded-5"></i>
              <input type="text" placeholder="Confirmer le mot de passe" className="p-2 bg-body-secondary"/></span>
            <span><input type="submit" value="S'inscrire" className="btn btn-primary pe-3 ps-3 rounded-1"/></span>
            <span><p>Vous avez deja un compte?<Link href="/Login"><span>Cliquez ici.</span></Link></p></span>
          </article>
        </form>
      </section>
    </main>
  </div>
    </div>
}
 
export default SignUp;