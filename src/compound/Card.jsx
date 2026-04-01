import Data from "../logements.json"
import { Link } from "react-router-dom";

export default function Card() {

    return(
        <div className="CardsContainer">
            {Data.map((item) => (
                <Link className="Cards" to={`/logement/${item.id}`} key={item.id}>
                    <img className="CardsPics" src={item.cover} alt={item.title}/>
                    <h2 className="CardTitle">{item.title}</h2>
                </Link>
            ))}
        </div>
    );
}