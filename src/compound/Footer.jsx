import logo2 from "../assets/Kasa2.webp"
import footerimg from "../assets/kasafooter.webp"

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footerwebp">
                <img className="footerimg" src={logo2} alt="" />
                <img className="footerimg" src={footerimg} alt="" />
            </div>
        </footer>
    )
}   