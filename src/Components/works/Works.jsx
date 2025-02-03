import React from 'react';
import './works.css';

const projects = [
  {
    name: 'Nomadgram',
    description: 'final-year social media web application built using the MERN stack.includes features like posting, liking, commenting, and exploring peoples profiles.for travelers to share their visited places and travel routes, with a travel guide feature.',
    github: 'https://nomadgram-albyabhi.netlify.app/',
  },
  {
    name: 'AutoCompose',
    description: 'An email-generating AI text generation interface created using the MERN stack, powered by Gemini text generation.',
    github: 'https://autocompose-albyabhi.netlify.app/',
  },
  {
    name: 'Capture-it',
    description: 'A web app created using the MERN stack to make an album that captures moments of ourselves and the people we love, for every small or big event, allowing collaboration by collecting images from everyone into one album.' ,
    github: 'https://capture-it-albyabhi.netlify.app/',
  },
  {
    name: 'Interactive seat booking system',
    description: 'An interactive and dynamic seat booking front-end system using Vite-React, with state management efficiently handled through Redux, utilizing features like store and slices.',
    github: 'https://interactive-seat-booking-albyabhi.netlify.app/',
  },
  {
    name: 'Football Page',
    description: 'A web design dedicated to sharing football scores and highlights.',
    github: 'https://knowfootball-albyabhi.netlify.app/',
  },
  {
    name: 'Studio Event Management',
    description: 'A website design for a studio specializing in wedding and event photography and videography.',
    github: 'https://event-management-site-albyabhi.netlify.app/',
  },
  {
    name: 'Real Estate Website',
    description: 'A real estate website design aimed at helping users find their desired homes and properties.',
    github: 'https://github.com/albyabhi/websites/tree/main/Project',
  },
  
  {
    name: 'TakeNote',
    description: 'TakeNote is a note-taking website that allows users to create, manage, and save their notes in a database.',
    github: 'https://github.com/albyabhi/websites/tree/main/TakeNote',
  },
  {
    name: 'Turf Booking Website',
    description: 'A web UI for a turf slot booking website, designed for users to book turf slots for sports activities.',
    github: 'https://github.com/albyabhi/websites/tree/main/turf%20booking/Turf',
  },
];

const Works = () => {
  return (
    <div className="works-container">
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              Github or page
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
