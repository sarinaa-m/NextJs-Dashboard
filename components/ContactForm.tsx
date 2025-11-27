'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import Button from './ui/Button';
import { FormData, FormErrors, FormField } from '@/types';
import Card from './ui/Card';
import Input from './ui/Input';
import Textarea from './ui/Textarea';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    const validateForm = (): FormErrors => {
        const errors: FormErrors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        } else if (formData.name.length < 2) {
            errors.name = 'Name must be at least 2 characters';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            errors.message = 'Message must be at least 10 characters';
        }

        return errors;
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length === 0) {
            setFormSubmitted(true);
            setFormErrors({});
            console.log('Form submitted:', formData);

            setTimeout(() => {
                setFormData({ name: '', email: '', message: '' });
                setFormSubmitted(false);
            }, 3000);
        } else {
            setFormErrors(errors);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (formErrors[name as FormField]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <Card>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Mail size={24} />
                Contact Form
            </h2>

            {formSubmitted ? (
                <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 px-4 py-3 rounded-lg">
                    <p className="font-medium">Success!</p>
                    <p className="text-sm">Your message has been submitted.</p>
                </div>
            ) : (
                <div>
                    <Input
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={formErrors.name}
                        placeholder="Enter your name"
                    />

                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={formErrors.email}
                        placeholder="your.email@example.com"
                    />

                    <Textarea
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={formErrors.message}
                        placeholder="Enter your message..."
                    />

                    <Button loading={false} onClick={handleSubmit} className="w-full justify-center">
                        <MessageSquare size={20} />
                        Send Message
                    </Button>
                </div>
            )}
        </Card>
    );
};

export default ContactForm;