import data from "..logements.json"

export function datamap() {
    return(
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.cover[0]} alt={item.title}/>
                </div>
            ))}
        </div>
    );
}
