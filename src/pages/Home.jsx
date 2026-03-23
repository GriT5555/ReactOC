import Data from "../logements.json"
import Header from "../compound/Header";
import Footer from "../compound/Footer";
import Homebanner from "../compound/Banner";
import Card from "../compound/Card";
import BannerimgH from "../assets/kasahomebanner.webp"

export function Data1 () {
    return Data
}

export default function Home(){
  return(
  <>
    <Header />
    <div className="Guts">
        <Homebanner src={BannerimgH} title="Chez vous, partout et ailleurs"/>
        <Card />
    </div>
    <Footer />
  </>
  );
}
