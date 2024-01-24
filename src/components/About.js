import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

export default function About(props) {
    return (
        <div className={`container text-${props.textColor}`} style={{marginTop: '5rem'}}>
            <h1 className="my-4 fw-medium">About GlobeBriefs</h1>
            <h5 className="my-3">Welcome to <b>GlobeBriefs</b> – Your Gateway to Global News</h5>
            <p className="mb-2">At GlobeBriefs, we believe that staying informed should be seamless and captivating. Our platform is designed to provide you with the latest news from around the world, ensuring that you are always in the know. Whether you're interested in business, sports, general news, or more, we've got you covered.</p>

            <h3 className="mt-5 mb-4">What Sets Us Apart?</h3>
            <div className={`accordion`} id="accordionExample">
                <div className={`accordion-item bg-${props.bgColor} text-${props.textColor}`}>
                    <h2 className={`bg-${props.bgColor} accordion-header`}>
                        <button className={`bg-${props.bgColor} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong className={`text-${props.textColor} fw-medium`}>Global Reach</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            GlobeBriefs offers a truly global perspective, bringing you news from multiple countries.We understand the importance of staying connected to the world, and our platform ensures that you have access to diverse and relevant information.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.bgColor} text-${props.textColor}`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed bg-${props.bgColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong className={`text-${props.textColor} fw-medium`}>Comprehensive Sections</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Explore news tailored to your interests with our diverse sections.From business updates to sports highlights, and general news to more specialized categories, we have organized our content to cater to every curiosity.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.bgColor} text-${props.textColor}`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed bg-${props.bgColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong className={`text-${props.textColor} fw-medium`}>Powered by News API</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            To deliver the most accurate and up - to - date information, we utilize the power of the 'News API.' This API seamlessly integrates with our platform, enabling us to fetch the latest news articles efficiently.
                        </div>
                    </div>
                </div>
            </div>

            <h4 className={`mt-4 mb-3`}>Features</h4>
            <ul className="list-group">
                <li className={`list-group-item text-${props.textColor} bg-${props.bgColor}`}><strong>Headlines and Descriptions : </strong>Get a quick overview of the news with headlines and concise descriptions.</li>
                <li className={`list-group-item text-${props.textColor} bg-${props.bgColor}`}><strong>Read Full News : </strong>Dive deeper into any story by simply clicking the 'Read Full News' button.</li>
                <li className={`list-group-item text-${props.textColor} bg-${props.bgColor}`}><strong>Timestamps : </strong>Stay informed about the timing of news updates to ensure you're receiving the freshest information.</li>
            </ul>

            <h4 className="mt-4 mb-3">Dual Modes</h4>
            <p>GlobeBriefs understands that user experience matters.Choose between our light and dark modes to customize your viewing experience.Whether you prefer a classic look or a sleek, modern feel, we have you covered.</p>

            <h4 className="mt-4 mb-3">Join Us on the Journey</h4>
            <p>GlobeBriefs is not just a news platform; it's a journey through the events that shape our world. Join us in staying informed, exploring diverse perspectives, and experiencing the power of global connectivity.</p>
            <p>Thank you for choosing GlobeBriefs.Your world, your news.</p>

            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/" className="link-opacity-75-hover">Explore Now</Link></li>
                <li className="breadcrumb-item" aria-current="page"><Link className="link-opacity-75-hover link-underline-offset-0" to="/Contact">Contact Us</Link></li>
            </ol>

            <p class={`text-center my-4 text-${props.textColor}`}>
                Copyright &#169; 2024&nbsp;
                <a href="github.com/saurabhkumardev/newsapp" className={`text-underline-opacity-0 text-primary opacityIssue`} >
                    Saurabh Kumar.&nbsp;
                </a> 
                All rights reserved.
            </p>
        </div>
    );

}