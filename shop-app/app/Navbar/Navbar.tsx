import { FC } from "react";
import Link from "next/link";

interface NavbarProps {
}

const Navbar: FC<NavbarProps> = ({ }) => {
    const style ={

    }
    return <div>
        <header className="Navbar fixed-top p-2 shadow-sm">
            <section className="d-flex flex-row justify-between">
                <div className="Logo mt-1 ms-2">
                    <p className="h4 fw-bold">ShopLook</p>
                </div>
                <nav className="d-flex flex-row gap-4 text-capitalize mt-2">
                    <article>
                        <Link href="/"><p>home</p></Link>
                    </article>
                    <article>
                        <Link href="/About"><p>about</p></Link>
                    </article>
                    <article>
                    <Link href="/Services"><p>Market</p></Link>
                    </article>
                    <article>
                    <Link href="/Contact"><p>Contact</p></Link>
                    </article>
                </nav>
                <div>
                    <form action="">
                        <article className="bg-body-secondary p-lg-1 rounded-1 mt-1 input-search">
                            <span className="bi-search ps-1 text-dark">
                                <input type="text" className="p-1 bg-body-secondary ps-2" placeholder="Recherche.."/>
                            </span>
                        </article>
                    </form>
                </div>
                <div className="d-flex flex-row gap-3 mt-1 me-2">
                <Link href="/Login"><button className="nav-login rounded-1 ps-3 pe-3">Se connecter</button></Link>
                    <div>
                        <article className="bg-body-secondary rounded-1 ps-2 pe-2 pt-1">
                            <span><p><i className="bi-cart3"></i>&nbsp;Panier <b>0</b></p></span>
                        </article>
                    </div>
                </div>
            </section>
        </header>
    </div>;
}

export default Navbar;