import Data from "../logements.json"

export default function Card() {
    return(
        <div className="CardsContainer">
            {Data.map((item) => (
                <div className="Cards" key={item.id}>
                    <img className="CardsPics" src={item.cover} alt={item.title}/>
                    <h2 className="CardTitle">{item.title}</h2>
                </div>
            ))}
        </div>
    );
}