import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (event: any) => {
        if (!validateForm()) return;
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
            console.log("Success", res);
        }
    };

    const validateForm = () => {
        throw new Error('Function not implemented.');
    }

    return (
        <div id='contact' className='contact section'>
            <h2 className='section-heading'>Contact</h2>

            <div className="contact-section">
                <div className="contact-left">
                    <h1 className='gradient-text'>Let's talk</h1>
                    <p>I'm currently seeking new opportunities!
                        Have a question or want to collaborate?
                        Drop your details below, and I'll get back to you soon.</p>
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
                            <a href='https://www.linkedin.com/in/danielseflinger/' target="_blank" rel="noopener noreferrer">linkedin.com/in/danielseflinger</a>
                        </div>
                    </div>
                </div>
                <form className="contact-right" onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group'>
                        <input {...register('name', { required: 'Name is required' })}
                            type='text' placeholder='Name' name='name' />
                        <p className={`error ${errors?.name ? 'active' : ''}`}>{errors?.name?.message as string}</p>
                    </div>
                    <div className='form-group'>
                        <input {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address',
                            }
                        })}
                            type='email' placeholder='Email' name='email' />
                        <p className={`error ${errors?.email ? 'active' : ''}`}>{errors?.email?.message as string}</p>
                    </div>
                    <div className='form-group'>
                        <textarea {...register('message', { required: 'Message is required' })}
                            name='message' rows={8} placeholder='Message' />
                        <p className={`error ${errors?.message ? 'active' : ''}`}>{errors?.message?.message as string}</p>
                    </div>
                    <button type='submit' className="submit primary-button">Submit</button>
                </form>
            </div>
        </div >
    )
}

export default Contact
