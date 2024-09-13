import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

function Home() {
    return (
        <main>
            <h1 className="OurServicesH1Text">Our <span className="highlight">Services</span></h1>

            <div className="Our_Services_Pics">

                <div className="image-container">
                    <img src="OurServicesPics/education-home.png" alt="Education" />
                    <div className="overlay">
                        <div className="overlay-content">
                            <i className="bi bi-book overlay-icon"></i>
                            <span className="overlay-text">Education</span>
                        </div>
                    </div>
                </div>

                <div className="image-container">
                    <img src="OurServicesPics/departments.png" alt="Departments" />
                    <div className="overlay">
                        <div className="overlay-content">
                        <i class="bi bi-building-add overlay-icon"></i>
                        <span className="overlay-text">Departments </span> 
                        </div>
                    </div>
                </div>

                <div className="image-container">
                    <img src="OurServicesPics/med-services-surgery-featured.png" alt="Medical Services" />
                    <div className="overlay">
                        <div className="overlay-content">
                            <i className="bi bi-capsule overlay-icon"></i>
                            <span className="overlay-text">Medical Services</span>
                        </div>
                    </div>
                </div>

            </div>



            <div className="WhoWeAreContainer">
        <div className="textContainer">
            <img src="HomePagePics/whoWeAre1.jpeg" alt="Medical Services" className="mainImage" />
            <div className="textOverlay">
            <h1 className="OurServicesH1Text">Who <span className="highlight">we are</span></h1>
            <p>
                Bhaskar Medical College and Bhaskar General Hospital are committed to excellence in healthcare education and patient care. Established with the vision of nurturing future medical professionals and providing quality healthcare services, our institution stands as a beacon of learning and healing in the community.
                <br /><br />
                At Bhaskar Medical College, we offer a comprehensive curriculum that integrates modern medical education with hands-on clinical experience. Our dedicated faculty, state-of-the-art infrastructure, and innovative teaching methodologies ensure that our students receive a well-rounded education that prepares them to meet the evolving challenges of the healthcare industry.
                <br /><br />
                Bhaskar General Hospital serves as the primary teaching hospital for the college, providing an extensive range of medical services across various specialties. With a patient-centric approach, advanced diagnostic facilities, and a team of skilled healthcare professionals, we are dedicated to delivering compassionate and high-quality care to all.
                <br /><br />
                Together, Bhaskar Medical College and Bhaskar General Hospital strive to foster a culture of excellence, innovation, and community service, making a positive impact on society through education, research, and patient care.
                </p>
                </div>
                <div className="pngImages">
                <img src="HomePagePics/compassion.png" alt="Compassion" className="pngIcon" /> <p>Integrity</p>
                <img src="HomePagePics/excellence.png" alt="Excellence" className="pngIcon" /> <p>Excellence</p>
                <img src="HomePagePics/integrity.png" alt="Integrity" className="pngIcon" /> <p>Compassion</p>
                </div>
             </div>
        </div>


        </main>
    );
}

export default Home;
