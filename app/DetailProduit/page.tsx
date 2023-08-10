import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import DetailProduit from "@/Components/Market/DetailProduit";

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div>
        <Navbar />
        <DetailProduit />
    </div>
}

export default page;