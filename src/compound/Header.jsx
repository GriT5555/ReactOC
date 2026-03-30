import logo from "../assets/Kasa.webp"

export default function Header() {
    return(
        <>
            <header className="Navblock">
                <img src={logo} alt="logo kasa"></img>
                <nav className="NavBar">
                    <a className="NavBtn" href="/">Accueil</a>
                    <a className="NavBtn" href="/About">A propos</a>
                </nav>
            </header>
        </>
    );
}