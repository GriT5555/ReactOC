export default function Host({name,profile,rating}) {
    return (
        <div className="HostBlock">
            <div className="HostInfo">
                <p>{name}</p>
                <img src={profile}/>
            </div>
            <p>{rating}</p>
        </div>
    )
}