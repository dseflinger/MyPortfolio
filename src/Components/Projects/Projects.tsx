import './Projects.scss';
import boxOfficeAppAnimation from '../../assets/BoxOfficeAppAnimation.gif';
import personaBotAnimation from '../../assets/PersonaBotAnimation.gif';
import interviewTrackerAnimation from '../../assets/InterviewTracker.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const gitHubLinks = {
    boxOfficeApp: 'https://github.com/dseflinger/box-office-performance',
    interviewTracker: 'https://github.com/dseflinger/InterviewTracker',
    personaBot: 'https://github.com/dseflinger/Personabot',
};

const projects = [
    {
        name: 'BoxOfficeApp',
        description:
            'A Django/PostgreSQL/Tailwind CSS web app that queries and displays box‑office performance for a given date.',
        img: boxOfficeAppAnimation,
        gitLink: gitHubLinks.boxOfficeApp,
    },
    {
        name: 'InterviewTracker',
        description:
            'An Interview Tracker application, using CQRS and Domain-Driven Design (DDD). It was created as a full-stack exercise to reinforce ASP.NET Core and Angular/ngrx skills in preparation for interviews.',
        img: interviewTrackerAnimation,
        gitLink: gitHubLinks.interviewTracker,
    },
    {
        name: 'PersonaBot',
        description:
            "A React/Next.js/Tailwind CSS chatbot that lets you talk to a bard, pirate, or wizard (powered by OpenAI's API).",
        img: personaBotAnimation,
        gitLink: gitHubLinks.personaBot,
    },
];

const Projects = () => (
    <div id="projects" className="projects section">
        <h2 className="section-heading">Projects</h2>
        {projects.map((p, idx) => (
            <div className="project-card" key={p.name}>
                {idx % 2 === 0 ? (
                    <>
                        <img src={p.img} alt={`${p.name} animation`} className="project-image" />

                        <div className="project-info">
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>

                            <div className="github-link">
                                <FontAwesomeIcon icon={faGithub} className="github-icon" />
                                <a href={p.gitLink} target="_blank" rel="noopener noreferrer">
                                    GitHub Repo
                                </a>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="project-info">
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>

                            <div className="github-link">
                                <FontAwesomeIcon icon={faGithub} className="github-icon" />
                                <a href={p.gitLink} target="_blank" rel="noopener noreferrer">
                                    GitHub Repo
                                </a>
                            </div>
                        </div>
                        <img src={p.img} alt={`${p.name} animation`} className="project-image" />
                    </>
                )}
            </div>

        ))}
    </div>
);

export default Projects;
