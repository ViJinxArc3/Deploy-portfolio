const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    &copy; {new Date().getFullYear()} Kayleigh's Portfolio
                </p>
                <div className="social_icons">
                    <a
                        href="https://web.facebook.com/kayleigh.botha.1"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a
                        href="https://github.com/ViJinxArc3"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kayleigh-botha-158536206/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;