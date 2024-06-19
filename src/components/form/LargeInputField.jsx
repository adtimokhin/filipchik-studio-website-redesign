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
        <div className="flex flex-col w-full items-center">
            <label className="mb-2 text-white header-4">{labelText}</label>
            <div className='desktop:w-[50%] tablet:w-[50%] phone:w-[80%]'>
                <textarea
                    placeholder={placeholderText}
                    value={text}
                    onChange={handleTextChange}
                    className="w-full h-40 px-2 pt-2 border border-white selection:border-none bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 selection:bg-main resize-none overflow-y-auto"
                />
                <div className="mt-1 footer-small-text text-white text-end">
                    {text.length}/{maxLength} знаков
                </div>
            </div>
            
        </div>
    );
};

export default LargeInputField;
