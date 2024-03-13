//This is how a component is created
export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section-title">Hey, I am Stas</p>
                    <h1 className="here--section--title">
                      <span className="hero--section--title--colour">Full STack</span>{" "}
                      <br />
                      Developer
                    </h1>
                    <p className="hero--section--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure natus, velit aliquid numquam officiis dolore beatae deserunt soluta labore. 
                        Sunt magnam consequuntur inventore dolore esse adipisci tempore sint aspernatur.
                        <br/>kdejfejfksejfklsdjfskjdfsdkjf?
                    </p>
                </div>
                <button className="btn btn-primary"> Get in touch</button>
            </div>
            <div className="hero--section--image">
                <img src="./2.jpg" alt="hero" height="90%" width="600px"/>
            </div>
        </section>
    )
    ;
}