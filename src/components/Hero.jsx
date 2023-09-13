import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} alt="Kayleigh headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Kayleigh</h1>
                <p>
                a dedicated student based in Cape Town, South Africa. I am on an exciting journey through the world of full-stack web development. Currently enrolled in an online full-stack web 
                development program at Hyperion Dev, 
                I'm on a quest to explore the intricacies of creating web applications that leave a lasting impression.
                </p>
                <div className="social-icons">
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
        </div>
    )
}

export default Hero;