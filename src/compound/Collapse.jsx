import { useState } from "react"
import Arrow from "../../public/arrowbtn.webp"

export default function Collapse({title, content, children, className}) {
const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <button className={`CollapseBtn ${className}`} onClick={() => {
                console.log("button clicked");
                setIsOpen(!isOpen);
                }}>
                    {title}
                <img className={isOpen ? "arrow open" : "arrow"} src={Arrow} />
            </button>
            {isOpen && <div className="CollapseCtn" >{children || content}</div>}
        </>
        )
    } 