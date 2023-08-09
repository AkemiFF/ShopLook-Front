import { FC } from "react";
import Navbar from "../../Navbar/Navbar";
import Aside from "../../../Components/Market/Aside/Aside";
import Tennis from "@/Components/Market/Tennis";

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return <div>
        <Navbar />
        <Aside />
        <Tennis />
    </div>
}

export default page;