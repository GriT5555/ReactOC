export default function Tags({title,location,tags = []}) {
    return (
        <div className="TagsBlock">
                <h1>{title}</h1>
                <h2>{location}</h2>
                <p>{tags}</p>
        </div>
    )
}