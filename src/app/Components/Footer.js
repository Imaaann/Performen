import "./Footer.css"
import Link from "next/link"


export default function Footer() {

    const linkStyle = {
        textDecoration: "underline", 
        color: "var(--normal-text-colour"
    }

    return (
        <footer>
            <div className="Link-Container">
                <div className="Links align-vertical">
                    <Link href="https://github.com/Imaaann/Performen" style={linkStyle}>Github</Link>
                    || 
                    <Link href="https://www.linkedin.com/in/abderrahmane-barkou-3565ab2b1/" style={linkStyle}>Contact</Link>
                </div>
            </div>
        </footer>

    )
}   