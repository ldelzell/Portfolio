//This is how a component is created
export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section-title">Hey, I am Stas</p>
                    <h1 className="here--section--title">
                      <span className="hero--section--title--colour">Full Stack</span>{" "}
                      <br />
                      Developer
                    </h1>
                    <p className="hero--section--description">Hello everyone, my name is Stanislav Nikolov and I am currently a second year student in 
                    Fontys University of Applied Science in the Netherlands. I am obsessed with improving and getting better every day, even if it is by just a little bit.
                    I am a man of many hobbies, stories and adventures. Hang on and we are going to enjoy the time together.
                    <br/>
                        <br/>You ready?
                    </p>
                </div>
                <button className="btn btn-primary"> Get in touch</button>
            </div>
            <div className="hero--section--image">
                <img src="./Images/1.jpg" alt="hero" height="90%" width="600px"/>
            </div>
        </section>
    )
    ;
}