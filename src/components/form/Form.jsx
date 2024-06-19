import React, { useState } from 'react';
import SmallInputField from './SmallInputField'; // Adjust the import path as needed
import LargeInputField from './LargeInputField';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, companyName, companyWebsite, description });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 justify-center">
            <span className='w-full flex flex-row justify-center gap-x-5'>
                <SmallInputField
                labelText="Name"
                placeholderText="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <SmallInputField
                labelText="Email"
                placeholderText="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </span>
            <span className='w-full flex flex-row justify-center gap-x-5'>
                <SmallInputField
                labelText="Company Name"
                placeholderText="Enter your company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                />
                <SmallInputField
                labelText="Company Website"
                placeholderText="Enter your company website"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                />
            </span>

            {/* TODO: Add a multi-button selection */}
            {/* FIXME: Move the whole input field to the correct position */}
            <LargeInputField
            labelText="Description"
            placeholderText="Enter your description here"
            onChange={(e) => {
                setDescription(e.target.value)}
            }
            />

            {/* FIXME: Fix the button's style */}
            <button
                type='submit'
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
