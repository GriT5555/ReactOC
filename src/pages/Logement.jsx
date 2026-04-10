import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Data from "../logements.json"
import Header from "../compound/Header";
import Footer from "../compound/Footer";
import Carousel from "../compound/Carousel";
import Tags from "../compound/Tags";
import Host from "../compound/Host";
import Collapse from "../compound/Collapse";

export default function Logement() {
const {id} = useParams();
const LogementX = Data.find((item) =>  item.id===id );
if (!LogementX) return <Navigate to ="/404" />
const TagList = LogementX.tags.map(tag =>
    <p className="Tags">{tag}</p>
);
const EquipList = LogementX.equipments.map(equipments =>
    <li>{equipments}</li>
);

    return(
        <>
        <Header />
        <div className="Guts">  
            <Carousel pictures={LogementX.pictures} />
            <div className="LogementXAttributes">
                <Tags title={LogementX.title} location={LogementX.location} tags={TagList} />
                <Host name={LogementX.host.name} profile={LogementX.host.picture} rating={LogementX.rating} />
            </div>
        <div className="LogementXCollapseBox">
            <div className="LXC" >
            <Collapse title="Description" className="MediumC" content={LogementX.description}/>
            </div>
            <div className="LXC" >
            <Collapse title="Équipements" className="MediumC" content={EquipList}/>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )
}