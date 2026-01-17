import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  experience,
  certifications,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            {worktimeline.map((data, i) => {
              return (
                <div key={i} className="education-item mb-4">
                  <h4 className="education-title">{data.jobtitle}</h4>
                  <p className="education-institution">{data.where}</p>
                  <p className="education-duration">{data.date}</p>
                  {data.details && (
                    <ul className="education-details">
                      {data.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            <div className="skills-grid">
              {skills.map((data, i) => {
                return (
                  <div key={i} className="skill-tile">
                    <div className="skill-content">
                      <h4 className="skill-name">{data.name}</h4>
                      <p className="skill-description">{data.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Experience & Certifications</h3>
          </Col>
          <Col lg="7">
            {/* Experience Section */}
            <div className="experience-section mb-5">
              <h4 className="subsection-title">Experience</h4>
              {experience.map((data, i) => {
                return (
                  <div key={i} className={`experience-item ${data.current ? 'current-role' : ''}`}>
                    <div className="experience-header">
                      <h5 className="experience-role">
                        {data.role}
                        {data.current && <span className="current-badge">●</span>}
                      </h5>
                      <p className="experience-company">{data.company}</p>
                      <p className="experience-period">{data.period}</p>
                    </div>
                    <p className="experience-description">{data.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Certifications Section */}
            <div className="certifications-section">
              <h4 className="subsection-title">Certifications</h4>
              {certifications.map((data, i) => {
                return (
                  <div key={i} className="certification-item">
                    <h5 className="certification-title">{data.title}</h5>
                    <p className="certification-issuer">{data.issuer} • {data.year}</p>
                    <a href={data.link} target="_blank" rel="noopener noreferrer" className="cert-btn">
                      View Certificate
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </a>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
