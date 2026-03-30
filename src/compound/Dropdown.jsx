import { useState } from "react"
import Arrow from "../../public/arrowbtn.webp"

export default function Collapse({title, content, children}) {
const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <button className="CollapseBtn" onClick={() => {
                console.log("button clicked");
                setIsOpen(!isOpen);
                }}>
                    {title}
                <img className="CollapseImg" src={Arrow} />
            </button>
            {isOpen && <div className="CollapseCtn" >{children || content}</div>}
        </>
        )
    } 