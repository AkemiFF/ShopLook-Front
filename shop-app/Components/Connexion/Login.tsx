import { FC } from "react";
import Link from "next/link";

interface LoginProps {
    
}
 
const Login: FC<LoginProps> = ({}) => {
    return <div>
         <div>
    <main className="Login-main d-flex flex-row justify-content-between bg-light me-3 ms-3">
      <section id="image-mobile">
        image
      </section>
      <section className="text-center bg-light">
        <p>Ravis de vous revoir</p>
        <p>Connecter votre compte</p>
        <form action="">
          <article className="form-login d-flex flex-col gap-2">
            <span>
              <i className="bi-person-fill text-primary rounded-5"></i>
              <input type="text" placeholder="Nom d'utilisateur" className="p-2 bg-body-secondary"/></span>
            <span className="bi-lock-fill text-primary rounded-5"><input type="password"  placeholder="Mot de passe" className="p-2 bg-body-secondary"/></span>
            <span><p>Mot de passe oublier?</p></span>
            <span><input type="submit" value="Se connecter" className="btn btn-primary pe-3 ps-3 rounded-1"/></span>
            <span><p>Pour s&apos;inscrire?<Link href="/Inscription"><span>Cliquez ici.</span></Link></p></span>
          </article>
        </form>
      </section>
    </main>
  </div>
    </div>
}
 
export default Login;