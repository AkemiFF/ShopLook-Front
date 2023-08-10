import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Aside from "../../Components/Market/Aside/Aside";
import ProduitsTrie from "@/Components/Market/ProduitsTrie";

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div>
        <Navbar />
        <Aside />
        <ProduitsTrie />
    </div>
}

export default page;