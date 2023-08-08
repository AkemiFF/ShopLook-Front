import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import SignUp from "@/Components/Connexion/SignUp";

interface pageProps {
    
}
 
const page: FC<pageProps> = ({}) => {
    return <div>
        <Navbar />
        <SignUp />
    </div>
}
 
export default page;