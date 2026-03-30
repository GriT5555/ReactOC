export default function Tags({title,location,tags = []}) {
    return (
        <div className="TagsBlock">
                <p>{title}</p>
                <p>{location}</p>
                <p>{tags}</p>
        </div>
    )
}