import Data from "../logements.json"
import Header from "../compound/Header";
import Footer from "../compound/Footer";
import Homebanner from "../compound/Banner";
import Card from "../compound/Card";

export function Data1 () {
    return Data
}

export default function Home(){
  return(
  <>
    <Header />
    <div className="Guts">
        <Homebanner />
        <Card />
    </div>
    <Footer />
  </>
  );
}
