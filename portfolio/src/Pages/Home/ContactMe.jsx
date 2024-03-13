export default function ContactMe(){
    return(
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">ewrqwrfrrrrererererer</p>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input className="contact--input text-md" type="text" name="first-name" id="first-name" required></input>
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input className="contact--input text-md" type="text" name="last-name" id="last-name" required></input>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input className="contact--input text-md" type="email" name="email" id="email" required></input>
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input className="contact--input text-md" type="email" name="number" id="phone-number" required></input>
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                        <span className="text-md">Choose Topic</span>
                        <select id="choose-topic" className="contact--input text-md">
                            <option>Select One</option>
                            <option>Tits</option>
                            <option>Pussy</option>
                        </select>
                </label>
                <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <text className="contact--input text-md" id="message" rows="8" placeholder="Type ur fucking message!"></text>
                </label>
                <label htmlFor="checkbox" className="checkbox--label">
                    <input type="checkbox" name="checkbox" id="checkbox" required></input>
                    <span className="text-sm"> I accept the terms</span>
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form>
        </section>
    )
}