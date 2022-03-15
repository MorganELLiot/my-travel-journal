import globe from "../images/globe-logo.png";

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav--logo" src={globe} />
            <h1 className="nav--title">my travel journal.</h1>
        </nav>
    )
}