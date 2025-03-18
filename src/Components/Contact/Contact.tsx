import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const onSubmit = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "92952b41-351c-45ea-88d1-6cdc1b43f4ab");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            //todo add toast here or something instead
            console.log("Success", res);
        }
    };

    return (
        <div id='contact' className='contact'>
            <h2 className='section-heading'>Contact</h2>

            <div className="contact-section">
                <div className="contact-left">
                    <h1 className='gradient-text'>Let's talk</h1>
                    <p>I'm currently seeking new opportunities!
                        Have a question or want to collaborate?
                        Drop your details below, and I'll get back to you soon.</p>
                    {/* todo add icons and make links clickable */}
                    <div className="contact-details">

                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>dseflinger@gmail.com</span>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>(818) 815-1382</span>
                        </div>
                        <div className="contact-detail">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <a href='https://www.linkedin.com/in/danielseflinger/'>linkedin.com/in/danielseflinger</a>
                        </div>
                    </div>
                </div>
                {/* todo add validation */}
                <form className="contact-right" onSubmit={onSubmit}>
                    <input type='text' placeholder='Name' name='name' />
                    <input type='email' placeholder='Email' name='email' />
                    <textarea name='message' rows={8} placeholder='Message' />
                    <button type='submit' className="submit primary-button">Submit</button>
                </form>
            </div>
        </div >
    )
}

export default Contact