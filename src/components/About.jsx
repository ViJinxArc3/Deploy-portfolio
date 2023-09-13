import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                    In the vast universe of coding, I've had the privilege of navigating through various constellations of technologies and languages.
                     With the knowledge and skills acquired during my studies,
                      I've not only harnessed the art of crafting user-friendly front-end experiences but have also delved into the intricate 
                      world of back-end development. While my heart beats for the complexity of backend programming, I must admit that my creative 
                      soul finds its true bliss in designing captivating and intuitive layouts. Crafting beautiful, user-centric interfaces is not 
                      just a task for me; it's a labor of love. Whether it's aligning pixels with precision or bringing out the best in user 
                      interactions, I relish every moment spent in the creative realm of web design.
                    </p>
                    <p>As I continue my journey, I eagerly anticipate the challenges and opportunities that lie ahead. My goal is not just to build web applications but to craft digital solutions that inspire, engage, and delight users. I'm excited to be a part of this dynamic and ever-evolving field, and I can't wait to see where it takes me next.</p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;