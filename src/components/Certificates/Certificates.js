import React from 'react';
import './Certificates.css';

const certificates = [
  {
    title: "Build Your Own Static Website",
    issuer: "Successfully completed the Build Your Own Static Website project as part of an intensive learning program. Developed a fully responsive and visually appealing Tourism website using HTML, CSS, and Bootstrap. The project demonstrated skills in creating modern, user-friendly static websites optimized for mobile devices.",
    date: "March 2023",
    link: "https://media-content.ccbp.in/certificates/share/ODWSKNEFSB.png"
  },
  {
    title: "Responsive Web Design",
    issuer: "Completed a certification in Responsive Web Design from Nxtwave, focusing on building mobile-first, responsive websites using HTML, CSS, and JavaScript.",
    date: "July 2023",
    link: "https://media-content.ccbp.in/certificates/share/ZZBHIQNRID.png"
  },
  {
    title: "Python Programming",
    issuer: "I completed the Python Programming certification from Nxtwave, mastering core concepts such as variables, data types, loops, functions, and data structures like lists, dictionaries, and sets. I gained proficiency in algorithms, error handling with exceptions, file handling, and object-oriented programming. This comprehensive training has equipped me to write efficient, maintainable, and error-free Python code.",
    date: "July 2023",
    link: "https://media-content.ccbp.in/certificates/share/ZZBHIQNRID.png"
  },
  {
    title: "Introduction to Databases",
    issuer: "Completed a certification in databases from Nxtwave, learning about SQL, relational databases, and designing efficient database systems.",
    date: "August 2023",
    link: "https://media-content.ccbp.in/certificates/share/GGHFSUBDYJ.png"
  },
  {
    title: "Git and CommandLine",
    issuer: "Completed a certification in Git and CommandLine from Nxtwave, covering version control, Git workflows, and command-line tools for developers.",
    date: "August 2023",
    link: "https://media-content.ccbp.in/certificates/share/TKKFRORGTN.png"
  },
  {
    title: "JavaScript Essentials",
    issuer: "Completed a certification in Git and CommandLine from Nxtwave, covering version control, Git workflows, and command-line tools for developers.",
    date: "August 2023",
    link: "https://media-content.ccbp.in/certificates/share/XYWKZVEAOA.png"
  },
  {
    title: "Responsive Web Design using Flexbox",
    issuer: "Completed a certification in Git and CommandLine from Nxtwave, covering version control, Git workflows, and command-line tools for developers.",
    date: "August 2023",
    link: "https://media-content.ccbp.in/certificates/share/HJPKBOQMVP.png"
  },
  {
    title: "Node JS",
    issuer: "Completed a certification in Git and CommandLine from Nxtwave, covering version control, Git workflows, and command-line tools for developers.",
    date: "August 2023",
    link: "https://media-content.ccbp.in/certificates/share/LJWKNAPVEW.png"
  },
  {
    title: "React JS Getting started",
    issuer: "Completed a certification in Git and CommandLine from Nxtwave, covering version control, Git workflows, and command-line tools for developers.",
    date: "August 2023",
    link: "https://media-content.ccbp.in/certificates/share/TJLSJTMRIB.png"
  },
  {
    title: "React JS Getting started",
    issuer: "Completed a certification in Git and CommandLine from Nxtwave, covering version control, Git workflows, and command-line tools for developers.",
    date: "August 2023",
    link: "https://media-content.ccbp.in/certificates/share/TJLSJTMRIB.png"
  }
  
  // Add more certificates here
];

const Certificates = () => {
  return (
    <div className="certificates-container container">
      <h2>My Certi<strong class="purple">ficates</strong></h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            
            <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
