import { FC } from "react";
import Link from "next/link";

interface LoginProps {
    
}
 
const Login: FC<LoginProps> = ({}) => {
    return <div>
         <div>
    <main className="Login-main d-flex flex-row-reverse justify-content-between bg-light me-3 ms-3">
      <section id="image-mobile">
        image
      </section>
      <section className="text-center bg-light">
        <p className="fs-3 fw-semibold">Ravis de vous revoir</p>
        <p>Connecter votre compte</p>
        <form action="">
          <article className="form-login d-flex flex-col gap-2">
            <label className="input-width rounded-1 p-1 bg-body-secondary">
              <i className="bi-person-fill fs-5 rounded-5"></i>
              <input type="text" placeholder="Nom d'utilisateur" className="p-2 bg-body-secondary"/></label>
            <label className="input-width rounded-1 p-1 bg-body-secondary">
              <i className="bi-lock-fill fs-5 rounded-5"></i>
              <input type="password"  placeholder="Mot de passe" className="p-2 bg-body-secondary"/></label>
            <span><Link href="/LostPass"><p>Mot de passe oublier?</p></Link></span>
            <span><input type="submit" value="Se connecter" className="button-width rounded-1 ps-2 pe-2 fw-semibold"/></span>
            <span><p>Pour s&apos;inscrire?<Link href="/Inscription"><span>Cliquez ici.</span></Link></p></span>
          </article>
        </form>
      </section>
    </main>
  </div>
    </div>
}
 
export default Login;