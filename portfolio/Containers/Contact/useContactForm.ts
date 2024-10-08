import emailJS from '@emailjs/browser';
import { useState, useCallback } from 'react';

interface Status {
    message: string;
    success: boolean;
}

export const useContactForm = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [buttonText, setButtonText] = useState<string>('Send');
    const [status, setStatus] = useState<Status>({ message: '', success: false });

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
            setStatus({ message: 'Please fill in all fields.', success: false });
            setButtonText('Send');
            return; // Prevent sending the email if validation fails
        }

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

        return {
            name,
            setName,
            email,
            setEmail,
            phone,
            setPhone,
            message,
            setMessage,
            buttonText,
            setButtonText,
            status,
            setStatus,
            handleSubmit,
        };
    };