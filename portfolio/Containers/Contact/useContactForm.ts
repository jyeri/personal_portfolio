import { useState, useRef, useCallback } from 'react';
import emailJS from '@emailjs/browser';

export const useContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({ message: '', success: false });
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonText('Sending...');
        const serviceID = 'service_n6xu9t6';
        const templateID = 'template_l6ocenu';
        const userID = '2ul_Ijm4IxKG8ENJi';

        const templateParams = {
            to_name: 'Jyri Rummukainen',
            from_name: name,
            from_email: email,
            phone: phone,
            message: message,
        };

        emailJS.send(serviceID, templateID, templateParams, userID)
            .then(() => {
                setStatus({ message: 'Message sent successfully!', success: true });
                setButtonText('Message sent');
            }, (error) => {
                console.error('FAILED...', error.text);
                setStatus({ message: 'Failed to send message. Please try again later.', success: false });
                setButtonText('Failed');
            });
    }, [name, email, phone, message]);

    return { name, setName, email, setEmail, phone, setPhone, message, setMessage, buttonText, status, form, handleSubmit };
};