import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import LostPass from "@/Components/Connexion/LostPass";

interface pageProps {
    
}
 
const page: FC<pageProps> = ({}) => {
    return <div>
        <Navbar />
        <LostPass />
    </div>
}
 
export default page;