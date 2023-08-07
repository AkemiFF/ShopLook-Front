
import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Contact from "@/Components/Contact/Contact";

interface pageProps {
    
}
 
const page: FC<pageProps> = ({}) => {
    return <div>
        <Navbar />
        <Contact />
    </div>
}
 
export default page;