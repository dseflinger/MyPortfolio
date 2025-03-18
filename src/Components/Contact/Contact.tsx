import React from 'react'
import './Contact.scss'

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
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently seeking new opportunities!
                        Have a question or want to collaborate?
                        Drop your details below, and I'll get back to you soon.</p>
                    {/* todo add icons and make links clickable */}
                    <div className="contact-details">
                        <div className="contact-detail">dseflinger@gmail.com</div>
                        <div className="contact-detail">(818) 815-1382</div>
                        <div className="contact-detail">https://www.linkedin.com/</div>
                    </div>
                </div>
                <form className="contact-right" onSubmit={onSubmit}>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter your email' name='email' />
                    <label htmlFor=''>Message</label>
                    <textarea name='message' rows={8} placeholder='Enter your message' />
                    <button type='submit' className="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact