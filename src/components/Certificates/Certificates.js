import React from 'react';
import './Certificates.css';

const certificates = [
  {
    title: "Full Stack Development Certification",
    issuer: "Nxtwave",
    date: "March 2023",
    link: "https://example.com/certificate1"
  },
  {
    title: "Python Programming Certificate",
    issuer: "Guvi",
    date: "July 2023",
    link: "https://example.com/certificate2"
  },
  {
    title: "AWS Workshop",
    issuer: "Nxtwave",
    date: "August 2023",
    link: "https://example.com/certificate3"
  }
  // Add more certificates here
];

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h2>My Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p>{cert.date}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
