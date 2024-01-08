import React from "react";

function Hero() {
    return (
        <div className="hero-screen">
            <div className="absolute"></div>
            <div className="hero-content">
                <h1 className="hero-text">Welcome to Dymaxa Recruiting Services</h1>
                <p className="hero-description">
                    Dymaxa is an SME offering Job Recruitment and Au Pairing services, please take a look at our site to see more about us and contact us
                </p>
                <div className="cta-buttons">
                    <a href="#" className="cta-button">View Jobs</a>
                    <a href="#" className="cta-button">Post Jobs</a>
                </div>
            </div>
        </div>

    )
}

export default Hero;