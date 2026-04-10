export default function Host({name,profile,rating}) {
    return (
        <div className="HostBlock">
            <div className="HostInfo">
                <h2 className="Hostname">{name}</h2>
                <img className="Hostpic" src={profile}/>
            </div>
            <p>{rating}</p>
        </div>
    )
}