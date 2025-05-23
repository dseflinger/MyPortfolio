import './ProfessionalExperience.scss'
import my_resume from "../../assets/Daniel Seflinger's Resume.pdf"

const ProfessionalExperience = () => {
    return (
        <div id='professional-experience' className='professional-experience section'>
            <h2 className='section-heading'>Professional Experience</h2>
            <div className="experience-card">
                <h3>R1 RCM – Santa Monica, CA (Remote)</h3>
                <p className="experience-title">Software Engineer I → III (2020 – 2025)</p>
                <ul>
                    <li><strong>Software Engineer III (2023 – 2025):</strong> <br />Led adoption of NgRx Signals, built full-stack features with C#, Angular, MongoDB</li>
                    <li><strong>Software Engineer II (2021 – 2023):</strong> <br />Implemented SignalR for real-time updates, improved CI/CD pipeline stability</li>
                    <li><strong>Software Engineer I (2020 – 2021):</strong> <br />Built core ASP.NET MVC features and Angular components for the Patient Intake Experience application</li>
                </ul>
            </div>

            <div className="experience-card">
                <h3>Yardi Systems Inc. – Santa Barbara, CA</h3>
                <p className="experience-title">Software Engineer (2018 – 2019)</p>
                <ul>
                    <li>Developed dynamic document uploader for lease agreements with tenant data injection</li>
                    <li>Implemented filtered report generation with Word and PDF export</li>
                    <li>Built front-end features using AngularJS, VB.Net, and SQL Server</li>
                </ul>
            </div>

            <div className="action-buttons">
                <a className="my-resume" href={my_resume} target="_blank" rel="noopener noreferrer">
                    View Full Resume
                </a>
            </div>

        </div>
    )
}

export default ProfessionalExperience