
// TODO: I need to make the placeholder text to be of text font "body"
const SmallInputField = ({ labelText, placeholderText, value, onChange }) => {
    return (
        <div className="flex flex-col desktop:items-start tablet:items-start phone:items-center">
            <label className="mb-2 text-white header-4">{labelText}</label>
            <input
                type="text"
                placeholder={placeholderText}
                value={value}
                onChange={onChange}
                className="desktop:w-[436px] desktop:h-20 tablet:w-[300px] tablet:h-[70px] phone:w-[230px] phone:h-[50px] px-2 border border-white selection:border-none bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 selection:bg-main" 
            />
        </div>
    );
};

export default SmallInputField;
