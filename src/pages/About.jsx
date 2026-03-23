import Header from "../compound/Header";
import Footer from "../compound/Footer";
import Homebanner from "../compound/Banner";
import Collapsible from "../compound/Dropdown";
import BannerimgA from "../assets/bannerimg2.webp"

export default function About() {
    console.log(BannerimgA);
    return(
        <>
            <Header />
            <div className="Guts">
                <Homebanner src= {BannerimgA} title="" />
                <div className="CollapseBlock">
                    <Collapsible title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement verifiées par nos équipes."
                    />
                    <Collapsible title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <Collapsible title="Service"
                    content="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hotes ou nos locataires, soit empreinte de respect et de bienveillance."
                    />
                    <Collapsible title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </div>
            </div>
            <Footer />  
        </>
    )
}