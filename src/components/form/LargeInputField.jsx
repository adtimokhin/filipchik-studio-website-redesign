import React, { useState } from 'react';

const LargeInputField = ({ labelText, placeholderText, onChange }) => {
    const [text, setText] = useState('');
    const maxLength = 500;

    const handleTextChange = (e) => {
        if (e.target.value.length <= maxLength) {
            setText(e.target.value);
            onChange(e)
        }
    };

    // FIXME: Move the character counter to the correct position
    return (
        <div className="flex flex-col items-start w-full">
            <label className="mb-2 text-white header-4">{labelText}</label>
            <textarea
                placeholder={placeholderText}
                value={text}
                onChange={handleTextChange}
                className="w-[50%] h-40 px-2 border border-white selection:border-none bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 selection:bg-main resize-none overflow-y-auto"
            />
            <div className="mt-1 footer-small-text text-white self-end">
                {text.length}/{maxLength} characters
            </div>
        </div>
    );
};

export default LargeInputField;
