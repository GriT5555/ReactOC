import Header from "../compound/Header"
import Footer from "../compound/Footer"
import { Link } from "react-router-dom";
import e404 from "../../public/e404.webp"

export default function E404() {
    return(
        <>
            <Header />  
                <div className="guts404">
                    <img className="pic404" alt="Error 404 handling picture" src={e404}/>
                    <div className="text404box">
                        <p className="text404">Oups! La page que vous demandez n'existe pas ou a été deplacée!  </p>
                        <Link className="B2Home" to="/">Retourner sur la page d'accueil</Link>
                    </div>
                </div>
            <Footer />
        </>
    );
}