"use client";
import React from 'react';
import FormContact from './contactform';
import "./contact.css";

const ContactPage: React.FC = () => {
    return (
        
            <div className="contactCase" >
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ">Contactez-nous</h2>
                <p className="text-gray-100 md:text-lg lg:text-xl p-10">
                Vous avez un projet en tête ? Discutons de la façon dont nous pouvons vous aider avec vos besoins de conformité KYC.
                </p>
                <FormContact />
            </div>
      
    );
};

export default ContactPage;