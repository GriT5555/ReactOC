import { useState } from "react";

const [index, setIndex] = useState(0);
const next = () => {
    setIndex((index+1)%pictures.length);
}
const previous = () => {
    setIndex((index-1)%pictures.length);
}

export default function Carousel({pictures}) {
    return (
        <>
            <div className="carousel">
                <img src={pictures[index]} alt={title}/>

                <button className="CarouselBtn" src={"./public/LBtn.webp"} onClick={previous}></button>
                <button className="CarouselBtn" src={"./public/RBtn.webp"} onClick={next}></button>

                {/*potential display of displayed Pictures.index ? <p>{index+1}/{pictures.length}</p> comme la formule modulo des buttons*/}
            </div>
        </>
    );
}