import { FC } from "react";
import Link from "next/link";

interface LostPassProps {
    
}
 
const LostPass: FC<LostPassProps> = ({}) => {
    return <div>
         <div>
    <main className="Login-main d-flex justify-content-center bg-light me-3 ms-3">
      <section className="text-center bg-light">
        <p className="fs-3 fw-semibold">Mot de passe oublier</p>
        <p>Entrez votre email</p>
        <form action="">
          <article className="form-login d-flex flex-col gap-2">
            <label className="input-width rounded-1 p-1 bg-body-secondary">
              <i className="bi-person-fill fs-5 rounded-5"></i>
              <input type="text" placeholder="Nom d'utilisateur" className="p-2 bg-body-secondary"/></label>
            <label className="input-width rounded-1 p-1 bg-body-secondary">
              <i className="bi-lock-fill fs-5 rounded-5"></i>
              <input type="password"  placeholder="Mot de passe" className="p-2 bg-body-secondary"/></label>
            <span className="span-margin d-flex flex-row gap-3"><Link href="/Login"><input type="submit" value="Annuler" className="button-close rounded-1 ps-2 pe-2 fw-semibold"/></Link><input type="submit" value="Confirmer" className="button-confirm rounded-1 ps-2 pe-2 fw-semibold"/></span>
          </article>
        </form>
      </section>
    </main>
  </div>
    </div>
}
 
export default LostPass;