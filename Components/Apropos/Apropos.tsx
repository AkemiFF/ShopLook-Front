import { FC } from "react";
import Formulaire from "../Contact/Formulaire";

interface AproposProps {
    
}
 
const Apropos: FC<AproposProps> = ({}) => {
    return <div>
         <main>
            <section className="Accueil bg-light p-lg-5 ms-5 me-5 shadow-sm">
                <picture>
                    <p>Our about pages <b className="float-right">IMAGE BACKGROUND</b></p>
                </picture>
            </section>
         </main>
         <Formulaire />
    </div>
}
 
export default Apropos;