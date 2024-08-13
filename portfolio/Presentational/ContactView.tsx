import React from 'react';
import '../Styles/Contact.css';

interface ContactViewProps {
    name: string;
    setName: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    phone: string;
    setPhone: (value: string) => void;
    message: string;
    setMessage: (value: string) => void;
    buttonText: string;
    status: { message: string; success: boolean };
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactView: React.FC<ContactViewProps> = ({
    name, setName, email, setEmail, phone, setPhone, message, setMessage, buttonText, status, handleSubmit
}) => (
    <section className="contact" id="contact">
        <div className="content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="row mb-5">
                            <div className="col-md-4 mr-auto">
                                <h3 className="thin-heading mb-4">Get in touch</h3>
                                <p>Contact me directly via email or phone, or fill in the fields belove!</p>
                            </div>
                            <div className="col-md-6 ml-auto">
                                <h3 className="thin-heading mb-4">Contact Info</h3>
                                <p>T: +358 44 3519555</p> 
                                <p>E: jyrirummukainen@gmx.com</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <h3 className="thin-heading mb-4">Message me</h3>
                                <form onSubmit={handleSubmit} className="mb-5" method="post" id="contactForm" name="contactForm">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input className="form-control" type="text" value={name} placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input className="form-control" type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input className="form-control" type="tel" value={phone} placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <textarea className="form-control" value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4"/>
                                            <span className="submitting"></span>
                                        </div>
                                    </div>
                                </form>
                                {
                                status.message &&
                                <div className='status-message'>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </div>
                                }   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactView;