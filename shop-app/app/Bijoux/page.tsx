import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Aside from "../../Components/Market/Aside/Aside";
import Bijoux from "@/Components/Market/Bijoux";

interface pageProps {
    
}
 
const page: FC<pageProps> = ({}) => {
    return <div>
        <Navbar />
        <Aside />
        <Bijoux />
    </div>
}
 
export default page;