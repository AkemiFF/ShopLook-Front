import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Apropos from "@/Components/Apropos/Apropos";

interface pageProps {
    
}
 
const page: FC<pageProps> = ({}) => {
    return <div>
        <Navbar />
        <Apropos />
    </div>
}
 
export default page;