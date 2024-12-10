import React, { useRef } from 'react';
import '../styles/contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2tpijcb', 'template_c3by82m', form.current, 'Gl_BHUx1DufEu00q8')
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.error(error.text);
                    alert('Failed to send message. Please try again.');
                }
            );

        e.target.reset(); // Optional: Clear the form after submission
    };

    return (
        <div>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p>Contact me for any queries or help</p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">Rahul Girmaji</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">Pune, Maharashtra</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title">rahulgirmaji2505@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Message me</div>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" placeholder="Name" name="from_name" required />
                                    </div>
                                    <div className="field email">
                                        <input type="email" placeholder="Email" name="from_email" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Subject" name="subject" required />
                                </div>
                                <div className="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Message.." name="message" required></textarea>
                                </div>
                                <div className="button-area">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
