export default function Header() {
    return(
        <>
            <header className="Navblock">
                <img src={"./src/assets/Kasa.webp"} alt="logo kasa TM"></img>
                <nav className="NavBar">
                    <a className="NavBtn" href="/">Accueil</a>
                    <a className="NavBtn" href="/About">A propos</a>
                </nav>
            </header>
        </>
    );
}