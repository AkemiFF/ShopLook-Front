import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Aside from "../../Components/Market/Aside/Aside";
import Art from "@/Components/Market/Art";

interface pageProps {
    
}
 
const page: FC<pageProps> = ({}) => {
    return <div>
        <Navbar />
        <Aside />
        <Art />
    </div>
}
 
export default page;