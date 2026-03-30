import { useParams } from "react-router-dom";
import Data from "../logements.json"
import Header from "../compound/Header";
import Footer from "../compound/Footer";
import Carousel from "../compound/Carousel";
import Tags from "../compound/Tags";

export default function Logement() {
const {id} = useParams();
const LogementX = Data.find((item) =>  item.id===id );
if (!LogementX) return (
    <>
        <p>404 - La page que vous demandez n'existe pas.</p>
        <a href="" >Retourner sur la page d'accueil</a>
    </>
);

    return(
        <>
        <Header />
        <div className="Guts">
            <Carousel pictures={LogementX.pictures} />
            <Tags title={LogementX.title} location={LogementX.location} tags={LogementX.tags} />
        </div>
        <Footer />
        </>
    )
}