import React, { useState } from 'react';
import SmallInputField from './SmallInputField'; // Adjust the import path as needed
import LargeInputField from './LargeInputField';
import RadioButtonGroup from './RadioButtonGroup';
import "../../styles/vertical_spacings.css"
import svgArrowReference from "../../../public/icons/action-arrow.svg";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [description, setDescription] = useState('');
    const [option, setOption] = useState('');

    const options = ['Партнерство', 'Медиа/СМИ', 'Услуги', 'Выступление', 'Другое'];


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, companyName, companyWebsite, description, option });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-action-items justify-center">
            <span className='w-full flex desktop:flex-row tablet:flex-row phone:flex-col justify-center gap-x-5 gap-action-items'>
                <SmallInputField
                labelText="Ваше Имя"
                placeholderText="Имя сюда"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <SmallInputField
                labelText="Ваша Почта"
                placeholderText="Почту сюда"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </span>
            <span className='w-full flex desktop:flex-row tablet:flex-row phone:flex-col justify-center gap-x-5 gap-action-items'>
                <SmallInputField
                labelText="Название Компании"
                placeholderText="Что за компания?"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                />
                <SmallInputField
                labelText="Сайт Компании"
                placeholderText="https://..."
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                />
            </span>


            <RadioButtonGroup
                labelText="Что Вас Интересует"
                options={options}
                onChange={(e)=>{
                    setOption(e.target.value);
                }}
            />

            <LargeInputField
            labelText="Ваш Запрос"
            placeholderText="Чем мы сможем вам помочь?"
            onChange={(e) => {
                setDescription(e.target.value)}
            }
            />
            <div class="w-[30%] flex flex-1 justify-center items-center">
                <button
                    type='submit'
                    class="bg-white py-[24px] px-[20px] text-text flex flex-row gap-4 rounded-full text-based-link items-center cta-link"
                >
                    <p>Отправить</p>
                    {/* TODO: add animation to the button like that of other links on the home page*/}
                    <img src={svgArrowReference.src} alt="arrow" loading="lazy"/>
                </button>
            </div>
        </form>
    );
};

export default Form;
