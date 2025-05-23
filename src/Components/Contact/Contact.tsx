import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        const payload = {
            ...data,
            access_key: "92952b41-351c-45ea-88d1-6cdc1b43f4ab"
        };

        const json = JSON.stringify(payload);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast.success("Message sent!");
        }
        else {
            toast.error("Message failed.");
        }
    };

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
                            type='text' placeholder='Name' />
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
                            type='email' placeholder='Email' />
                        <p className={`error ${errors?.email ? 'active' : ''}`}>{errors?.email?.message as string}</p>
                    </div>
                    <div className='form-group'>
                        <textarea {...register('message', { required: 'Message is required' })}
                            rows={8} placeholder='Message' />
                        <p className={`error ${errors?.message ? 'active' : ''}`}>{errors?.message?.message as string}</p>
                    </div>
                    <button type='submit' className="submit primary-button">Submit</button>
                </form>
            </div>
        </div >
    )
}

export default Contact
