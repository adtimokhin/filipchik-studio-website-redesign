import { useState } from 'react';

const RadioButtonGroup = ({ labelText, options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        onChange(e);
    };

    // FIXME: I have a bug where I cannot see the first few items on smaller screens
    return (
        <div className="flex flex-col items-start w-full relative">
            <label className="mb-2 text-white header-4 w-full text-center">{labelText}</label>
            <div className="w-full overflow-x-auto flex items-center justify-center relative">
                <div className="flex space-x-8 whitespace-nowrap body pr-10">
                    {options.map((option, index) => (
                        <label key={index} className={`flex items-center gap-4 ${selectedOption === option ? 'text-white' : 'text-text_dimmed hover:text-text'} group hover:cursor-pointer`}>
                            {option}
                            <span className={`flex items-center justify-center w-4 h-4 border border-none rounded-full mr-2 ${selectedOption === option ? 'bg-white' : 'bg-text_dimmed group-hover:bg-text'}`}>
                                {selectedOption === option ? '' : 
                                    <span className='w-2 h-2 bg-accent rounded-full'/>
                                    }
                            </span>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                                className="hidden"
                            />
                        </label>
                    ))}
                </div>
            </div>
            {/* Side gradients */}
            <div className="absolute bottom-0 left-0 w-40 h-1/2 bg-gradient-to-r from-accent opacity-75 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-40 h-1/2 bg-gradient-to-l from-accent opacity-75 pointer-events-none"></div>
            </div>
    );
};

export default RadioButtonGroup;
