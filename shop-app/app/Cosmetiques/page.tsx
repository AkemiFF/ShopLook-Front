import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Aside from "../../Components/Market/Aside/Aside";
import Produits from "../../Components/Market/Produits";

interface pageProps {
    
}
 
const page: FC<pageProps> = ({}) => {
    return <div>
        <Navbar />
        <Aside />
        <Produits />
    </div>
}
 
export default page;