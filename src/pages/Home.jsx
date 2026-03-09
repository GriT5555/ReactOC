import Data from "../logements.json"
import '../Home.css'

export default function Homebanner() {
    return(
        <div className="homebanner">
            <p>Chez vous, partout ailleurs</p>
        </div>
    )
}

export function Datamap() {
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

export function Data1 () {
    return Data
}


