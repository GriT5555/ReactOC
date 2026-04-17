import { useState } from "react";

export default function Carousel({pictures = []}) {
const [index, setIndex] = useState(0);
const next = () => {
    setIndex((index + 1) % pictures.length);
}
const previous = () => {
    setIndex((index - 1 + pictures.length) % pictures.length);
}
const MultiplePics = pictures.length > 1;

if (!pictures.length) return null;
    return (
        <>
            <div className="Carousel">
                {MultiplePics && (
                <button className="CarouselBtn Prev" onClick={previous}>
                    <img className="CBtnImg" src={"/LBtn.webp"} alt=""/>
                </button>
                )}

                <img className="CarouselImg" src={pictures[index]} alt=""/>

                {MultiplePics && (
                <button className="CarouselBtn Next" onClick={next}>
                    <img className="CBtnImg" src={"/RBtn.webp"} alt=""/>
                </button>
                )}

                {MultiplePics && (
                <p className="PicturesIndex">{index+1}/{pictures.length}</p> 
                )}

            </div>
        </>
    );
}