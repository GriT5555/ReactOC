export default function Homebanner({src, title}) {

    return(
        <div className="homebanner darken"
        style={{ backgroundImage: `url(${src})`, }}>
            <h1> {title} </h1>
        </div>
    )
}