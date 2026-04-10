import { useState } from "react";

export default function Carousel({pictures = []}) {
const [index, setIndex] = useState(0);
const next = () => {
    setIndex((index + 1) % pictures.length);
}
const previous = () => {
    setIndex((index - 1 + pictures.length) % pictures.length);
}
if (!pictures.length) return null;
    return (
        <>
            <div className="Carousel">
                <button className="CarouselBtn Prev" onClick={previous}>
                    <img src={"/LBtn.webp"} alt=""/>
                </button>

                <img className="CarouselImg" src={pictures[index]} alt=""/>

                <button className="CarouselBtn Next" onClick={next}>
                    <img src={"/RBtn.webp"} alt=""/>
                </button>

                <p className="PicturesIndex">{index+1}/{pictures.length}</p> 
            </div>
        </>
    );
}