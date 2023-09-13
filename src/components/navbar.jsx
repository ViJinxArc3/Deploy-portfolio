import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Kayleighs's Portfolio
                </Link>
            </div>
            <a href="https://main--incredible-lokum-bed829.netlify.app/" className="cv-btn">Resume</a>
        </div>
    )
}

export default Navbar;