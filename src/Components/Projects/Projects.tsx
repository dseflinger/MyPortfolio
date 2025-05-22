import React from 'react';
import './Projects.scss';
import boxOfficeAppAnimation from '../../assets/BoxOfficeAppAnimation.gif';
import personaBotAnimation from '../../assets/PersonaBotAnimation.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const gitHubLinks = {
    boxOfficeApp: "https://github.com/dseflinger/box-office-performance",
    personaBot: "https://github.com/dseflinger/Personabot",
};

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <h2 className="section-heading">Projects</h2>
            <div className="project-card">
                <img
                    src={boxOfficeAppAnimation}
                    alt="Box Office App Animation"
                    className="project-image"
                />
                <div className="project-info">
                    <h3>Box Office Performance App</h3>
                    <p>
                        A Django/PostgreSQL/Tailwind CSS web app that queries and displays box office performance for a given date.
                    </p>
                    <div className="github-link">
                        <FontAwesomeIcon icon={faGithub} className="github-icon" />
                        <a
                            href={gitHubLinks.boxOfficeApp}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repo
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <div className="project-info">
                    <h3>PersonaBot</h3>
                    <p>
                        A React/Next.js/Tailwind CSS web app incorporating OpenAI's api to chat with a bard, a pirate, or a wizard.
                    </p>
                    <div className="github-link">
                        <FontAwesomeIcon icon={faGithub} className="github-icon" />
                        <a
                            href={gitHubLinks.personaBot}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repo
                        </a>
                    </div>
                </div>
                <img
                    src={personaBotAnimation}
                    alt="PersonaBot Animation"
                    className="project-image"
                />

            </div>
        </div>
    );
};

export default Projects;
