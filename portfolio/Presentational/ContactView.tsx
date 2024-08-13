import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Assets/bw-logo.svg";
import TrackVisibility from 'react-on-screen';

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
        <Container>
            <Row className="align-items-center">
                <Col size={12} md={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                        }
                    </TrackVisibility>
                </Col>
                <Col size={12} md={6}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Get In Touch</h2>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="text" value={name} placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="tel" value={phone} placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)}/>
                                        </Col>
                                        <Col size={12} className="px-2">
                                            <textarea value={message} placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                                            <button type="submit"><span>{buttonText}</span></button>
                                        </Col>
                                        {
                                            status.message &&
                                            <div className='status-message'>
                                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                            </div>
                                        }
                                    </Row>
                                </form>
                            </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
);

export default ContactView;