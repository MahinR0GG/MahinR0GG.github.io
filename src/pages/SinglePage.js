import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Home } from "./home";
import { About } from "./about";
import { Portfolio } from "./portfolio";
import { ContactUs } from "./contact";
import { meta } from "../content_option";
import { useScrollAnimation } from "../hooks/ScrollAnimation";
import "./SinglePage.css";

const AnimatedSection = ({ children, id, className = "" }) => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section
            id={id}
            ref={ref}
            className={`animated-section ${isVisible ? 'fade-in-visible' : ''} ${className}`}
        >
            {children}
        </section>
    );
};

export const SinglePage = () => {
    return (
        <HelmetProvider>
            <div className="single-page-container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title}</title>
                    <meta name="description" content={meta.description} />
                </Helmet>

                <AnimatedSection id="home" className="section-home">
                    <Home />
                </AnimatedSection>

                <AnimatedSection id="about" className="section-about">
                    <About />
                </AnimatedSection>

                <AnimatedSection id="portfolio" className="section-portfolio">
                    <Portfolio />
                </AnimatedSection>

                <AnimatedSection id="contact" className="section-contact">
                    <ContactUs />
                </AnimatedSection>
            </div>
        </HelmetProvider>
    );
};
