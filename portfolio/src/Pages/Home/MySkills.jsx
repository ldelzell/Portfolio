import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import data from "../../data/index.json";

export default function MySkills(){
    return(
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h2 className="skills--section--heading">My Expertise</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item) => (
                    <Link key={item.id} to={`${item.title}`} style={{ textDecoration: 'none' }}> {/* Generate dynamic URL */}
                        <div className="skills--section--card">
                            <div className="skills--section--img">
                                <img src={item.src} alt="image" height="100%" width="300px"/>
                            </div>
                            <div className="skills--section--card--content">
                                <h3 className="skills--section--title">{item.title}</h3>
                                <p className="skills--section--description">{item.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
