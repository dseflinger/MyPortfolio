import React from 'react'
import './Projects.scss'
import boxOfficeAppAnimation from '../../assets/BoxOfficeAppAnimation.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const gitHubLinks = {
    boxOfficeApp: "https://github.com/dseflinger/box-office-performance"
}

const Projects = () => {
    // todo update about me
    return (
        <div id='projects' className='projects'>
            <h2 className='section-heading'>Projects</h2>
            <div className="projects-section">
                <div className='project-content'>
                    <img src={boxOfficeAppAnimation} alt="Box Office Animation" />
                    <div className='github-link'><FontAwesomeIcon icon={faGithub} /><a href={gitHubLinks.boxOfficeApp} target="_blank">GitHub Repo</a></div>
                </div>
            </div>
        </div>
    )
}

export default Projects