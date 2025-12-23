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
        // Prefer Vite env vars if present, else fall back to existing values
        const serviceID = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || 'service_79q7qcg';
        const templateID = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || 'template_l6ocenu';
        const userID = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || '2ul_Ijm4IxKG8ENJi';

        const templateParams = {
            to_name: 'Jyri Rummukainen',
            from_name: name,
            from_email: email,
            phone: phone,
            message: message,
        };

        // Ensure SDK is initialized with the public key
        try { emailJS.init({ publicKey: userID }); } catch (_) {}

        emailJS.send(serviceID, templateID, templateParams, userID)
            .then(() => {
                setStatus({ message: 'Message sent successfully!', success: true });
                setButtonText('Message sent');
            }, (error) => {
                const errText = (error && (error.text || error.message)) || 'Unknown error';
                console.error('FAILED...', errText);
                setStatus({ message: `Failed to send message. ${errText}`, success: false });
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