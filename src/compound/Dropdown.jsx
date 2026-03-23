import { useState } from "react"

export default function Collapsible({title, content, children}) {
const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <button className="CollapseBtn" onClick={() => {
                console.log("button clicked");
                setIsOpen(!isOpen);
                }}>
                    {title}
                <img src={"./public/arrowbtn.webp"} />
            </button>
            {isOpen && <div className="CollapseCtn" >{children || content}</div>}
        </>
        )
    } 