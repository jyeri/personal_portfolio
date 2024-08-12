import React from 'react';
import { useContactForm } from './useContactForm';
import ContactView from '../../Presentational/ContactView';

const ContactForm = () => {
    const formProps = useContactForm();

    return <ContactView {...formProps} />;
};

export default ContactForm;