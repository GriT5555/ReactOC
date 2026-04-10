export default function Tags({title,location,tags = []}) {
    return (
        <div className="TagsBlock">
                <h1 className="TagsTitle">{title}</h1>
                <h2 className="TagsLoctn">{location}</h2>
                <div className="Taglist">
                    {tags}
                </div>
        </div>
    )
}