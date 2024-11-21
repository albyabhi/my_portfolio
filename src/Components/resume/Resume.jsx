import React from 'react';
import './resume.css'; 
import resume from './asset/resume.pdf'

const Resume = () => {
  return (
    <div className="resume-container">
     
      
      

      <section className="objective">
        <h2>Objective</h2>
        <p>Aspiring MERN stack, SQL, Java Developer with a strong background in Computer Science, seeking an opportunity to apply technical skills and abilities to contribute to the design, implementation, and maintenance of Java-based applications.</p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <h3>UG - Bachelor of Computer Application</h3>
        <p><strong>Institution:</strong> Nirmala College of Arts and Science, Chalakudy, Thrissur</p>
        <p><strong>Graduation Year:</strong> 2024</p>
        <p><strong>Relevant Coursework:</strong> Object-Oriented Programming, Data Structures, Algorithms, Software Engineering, Database Systems</p>

        <h3>Higher Secondary</h3>
        <p><strong>Institution:</strong> Holy Cross Higher Secondary, Mapranam, Thrissur</p>
        <p><strong>Percentage:</strong> 71%</p>

        <h3>SSLC</h3>
        <p><strong>Institution:</strong> St Annes High School, Kottapuram, Thrissur</p>
        <p><strong>Percentage:</strong> 78%</p>
      </section>

      <section className="projects">
        <h2>Academic Projects</h2>
        <h3>Travel Social Media (MERN Stack)</h3>
        <ul>
          <li>Developed a Travel Social Media website using React.js, providing users with a platform to share their travel experiences.</li>
          <li>Implemented features for users to add posts about various travel locations and share travel guides including itineraries for destinations.</li>
          <li>Used MongoDB for database management and Node.js for backend development.</li>
        </ul>

        <h3>Student Management System (JDBC Project)</h3>
        <ul>
          <li>Developed a Student Management System using JDBC for database connectivity and operations.</li>
          <li>Designed features to manage student records, including adding, updating, and deleting student information.</li>
        </ul>

        <h3>Hospital Management System (Hibernate Project)</h3>
        <ul>
          <li>Developed a Hospital Management System using Hibernate for ORM and database operations.</li>
          <li>Focused on managing hospital data, including CRUD operations for patients, encounters, and medications.</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <p><strong>Programming Languages:</strong> Java, Java EE</p>
        <p><strong>Web Technologies:</strong> HTML, CSS, JavaScript, React</p>
        <p><strong>Databases:</strong> MySQL, SQL</p>
        <p><strong>Development Tools:</strong> Eclipse, Git, VS Code</p>
        <p><strong>Operating Systems:</strong> Windows, Linux</p>
        <p><strong>Advanced Java:</strong> JDBC, Hibernate, Spring Boot</p>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Certified Java Full Stack Developer from JSPiders Kochi</li>
          <li>Web Development with React JS, ICT Academy of Kerala</li>
          <li>Bootstrap, Logix Space Technologies Pvt Ltd</li>
        </ul>
      </section>

      <div className="download-btn-container">
        <button href={resume} download="Alby_AB_Resume.pdf" className="download-btn">Download Resume</button>
      </div>

    </div>
  );
};

export default Resume;
