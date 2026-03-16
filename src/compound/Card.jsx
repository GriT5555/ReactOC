import Data from "../logements.json"

export default function Card() {
    return(
        <div>
            {Data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.cover[0]} alt={item.title}/>
                </div>
            ))}
        </div>
    );
}