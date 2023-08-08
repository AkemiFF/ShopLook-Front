import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Login from "@/Components/Connexion/Login";

interface pageProps {
    
}
 
const page: FC<pageProps> = ({}) => {
    return <div>
        <Navbar />
        <Login />
    </div>
}
 
export default page;