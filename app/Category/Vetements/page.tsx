import { FC } from "react";
import Navbar from "../../Navbar/Navbar";
import Aside from "../../../Components/Market/Aside/Aside";
import Vetement from "@/Components/Market/Vetement";

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div>
        <Navbar />
        <Aside />
        <Vetement />
    </div>
}

export default page;