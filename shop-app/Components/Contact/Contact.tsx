import { FC } from "react";


interface ContactProps {
    
}
 
const Contact: FC<ContactProps> = ({}) => {
    return <div>
         <main>
            <section className="Accueil bg-light p-lg-5 ms-5 me-5 shadow-sm">
                <picture>
                    <p>Our Contact pages <b className="float-right">IMAGE BACKGROUND</b></p>
                </picture>
            </section>
         </main>
    </div>
}
 
export default Contact;