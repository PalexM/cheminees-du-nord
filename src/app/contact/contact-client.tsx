/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ContactClient = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [captchaInputValue, setCaptchaInputValue] = useState('');
    const [captchaValue, setCaptchaValue] = useState('');
    const [captchaResult, setCaptchaResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const generateCaptcha = () => {
        const val1 = Math.floor(Math.random() * 10);
        const val2 = Math.floor(Math.random() * 10);
        const result = val1 + val2;
        setCaptchaValue(`${val1} + ${val2} = ?`);
        setCaptchaResult(result.toString());
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (captchaInputValue !== captchaResult) {
            setConfirmationMessage('Captcha incorrect. Veuillez réessayer.');
            generateCaptcha();
            setCaptchaInputValue('');
            return;
        }
        setIsLoading(true);
    
        try {
            const response = await fetch('/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message, phone }),
            });
            
            const result = await response.json();
            
            if (!response.ok) {
                console.error('Error submitting form:', result.message);
                setConfirmationMessage(result.message || "Une erreur s'est produite lors de l'envoi de l'e-mail.");
            } else {
                console.log('Form submitted successfully:', result.message);
                setConfirmationMessage('Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.');
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log('Error submitting form: ' + error.message);
                setConfirmationMessage('Une erreur est survenue : ' + error.message);
            } else {
                console.log('Error submitting form:', error);
                setConfirmationMessage('Une erreur est survenue.');
            }
        } finally {
            setIsLoading(false);
            setEmail('');
            setMessage('');
            setPhone('');
            setCaptchaInputValue('');
            generateCaptcha();
        }
    };
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);
    const handleCaptchaInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setCaptchaInputValue(e.target.value);

    return (
        <section className="py-16 md:py-20 bg-white" style={{ backgroundImage: "url('/image/pattern-white.svg')", backgroundPosition: 'center' }}>
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-4">
                        Restons en contact
                    </h1>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Nous sommes à votre disposition pour toute demande d'information ou devis concernant vos projets de cheminée et poêle
                    </p>
                </div>
                
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 hidden lg:block md:block">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 px-4 mb-10">
                                <div className="max-w-xs mx-auto">
                                    <div className="inline-flex mb-6 items-center justify-center w-12 h-12 bg-green-600 rounded-full">
                                        <svg className="h-6 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.21 8.82L14 2.78C13.474 2.27986 12.7759 2.00095 12.05 2.00095C11.3241 2.00095 10.626 2.27986 10.1 2.78L3.89 8.78C3.61408 9.02087 3.39216 9.31731 3.23879 9.64991C3.08541 9.98251 3.00404 10.3438 3 10.71V19.29C3.01054 20.0176 3.30904 20.7114 3.83012 21.2193C4.35119 21.7273 5.05235 22.008 5.78 22H18.22C18.9476 22.008 19.6488 21.7273 20.1699 21.2193C20.691 20.7114 20.9895 20.0176 21 19.29V10.71C20.9992 10.3585 20.929 10.0106 20.7935 9.68623C20.6579 9.36189 20.4596 9.06752 20.21 8.82V8.82ZM11.44 4.22C11.593 4.08016 11.7927 4.00262 12 4.00262C12.2073 4.00262 12.407 4.08016 12.56 4.22L18 9.5L12.53 14.78C12.377 14.9198 12.1773 14.9974 11.97 14.9974C11.7627 14.9974 11.563 14.9198 11.41 14.78L6 9.5L11.44 4.22ZM19 19.29C18.9871 19.4863 18.8987 19.6699 18.7532 19.8023C18.6078 19.9347 18.4166 20.0056 18.22 20H5.78C5.58338 20.0056 5.39225 19.9347 5.24678 19.8023C5.10132 19.6699 5.01286 19.4863 5 19.29V11.35L9.05 15.25L7.39 16.85C7.20375 17.0374 7.09921 17.2908 7.09921 17.555C7.09921 17.8192 7.20375 18.0726 7.39 18.26C7.48295 18.3575 7.59463 18.4352 7.71836 18.4885C7.84208 18.5418 7.97529 18.5695 8.11 18.57C8.36747 18.569 8.61462 18.4687 8.8 18.29L10.57 16.59C11.0096 16.8586 11.5148 17.0008 12.03 17.0008C12.5452 17.0008 13.0504 16.8586 13.49 16.59L15.26 18.29C15.4454 18.4687 15.6925 18.569 15.95 18.57C16.0847 18.5695 16.2179 18.5418 16.3416 18.4885C16.4654 18.4352 16.5771 18.3575 16.67 18.26C16.8563 18.0726 16.9608 17.8192 16.9608 17.555C16.9608 17.2908 16.8563 17.0374 16.67 16.85L15 15.25L19 11.35V19.29Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-gray-900">Email</h3>
                                    <a className="text-lg text-gray-700 hover:text-amber-500 font-medium" href="mailto:contact@cheminees-du-nord.fr">
                                        contact@cheminees-du-nord.fr
                                    </a>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-10">
                                <div className="max-w-xs mx-auto">
                                    <div className="inline-flex mb-6 items-center justify-center w-12 h-12 bg-green-600 rounded-full">
                                        <svg className="h-6 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.41 13C19.1901 13 18.96 12.93 18.74 12.88C18.2949 12.7805 17.8572 12.6501 17.43 12.49C16.9661 12.3212 16.4562 12.33 15.9984 12.5146C15.5405 12.6992 15.1671 13.0466 14.95 13.49L14.73 13.95C13.7589 13.3992 12.8617 12.7271 12.0601 11.95C11.2829 11.1484 10.6108 10.2512 10.0601 9.28L10.5201 9.07C10.9634 8.85292 11.3108 8.47953 11.4954 8.02169C11.6801 7.56385 11.6888 7.05391 11.5201 6.59C11.3612 6.15903 11.231 5.71808 11.13 5.27C11.08 5.05 11.04 4.82 11.01 4.6C10.8886 3.89562 10.5197 3.25774 9.96967 2.80124C9.41967 2.34474 8.72475 2.09961 8.01005 2.11H5.00005C4.5773 2.10945 4.1592 2.19825 3.77317 2.37058C3.38714 2.54292 3.04189 2.7949 2.76005 3.11C2.47237 3.43365 2.25817 3.81575 2.13215 4.23004C2.00614 4.64432 1.97131 5.08098 2.03005 5.51C2.57364 9.67214 4.47526 13.5387 7.44005 16.51C10.4114 19.4748 14.2779 21.3764 18.4401 21.92C18.5699 21.9299 18.7002 21.9299 18.83 21.92C19.5675 21.9211 20.2794 21.6505 20.83 21.16C21.1452 20.8782 21.3971 20.5329 21.5695 20.1469C21.7418 19.7609 21.8306 19.3428 21.83 18.92V15.92C21.8247 15.229 21.5809 14.5611 21.14 14.0291C20.6991 13.4971 20.088 13.1336 19.41 13ZM19.9 19C19.8997 19.1395 19.8702 19.2775 19.8134 19.4049C19.7565 19.5324 19.6736 19.6465 19.57 19.74C19.4604 19.8399 19.33 19.9141 19.1882 19.9573C19.0464 20.0006 18.8967 20.0117 18.75 19.99C15.0183 19.5026 11.5503 17.802 8.88005 15.15C6.20752 12.4775 4.49208 8.99737 4.00005 5.25C3.97833 5.10333 3.98949 4.95367 4.03272 4.81185C4.07596 4.67003 4.1502 4.5396 4.25005 4.43C4.34467 4.32515 4.46043 4.24154 4.5897 4.18466C4.71897 4.12778 4.85882 4.09892 5.00005 4.1H8.00005C8.23121 4.09435 8.45719 4.16898 8.63951 4.3112C8.82184 4.45341 8.94925 4.65442 9.00005 4.88C9.00005 5.15 9.09005 5.43 9.15005 5.7C9.26563 6.22386 9.41937 6.73857 9.61005 7.24L8.21005 7.9C7.96941 8.01046 7.78241 8.21185 7.69005 8.46C7.59003 8.70346 7.59003 8.97654 7.69005 9.22C9.12925 12.3028 11.6073 14.7808 14.69 16.22C14.9335 16.32 15.2066 16.32 15.45 16.22C15.6982 16.1276 15.8996 15.9406 16.01 15.7L16.64 14.3C17.156 14.4881 17.6838 14.6418 18.22 14.76C18.48 14.82 18.76 14.87 19.0301 14.91C19.2556 14.9608 19.4566 15.0882 19.5989 15.2705C19.7411 15.4529 19.8157 15.6788 19.81 15.91L19.9 19ZM14 2C13.7701 2 13.53 2 13.3 2C13.0348 2.02254 12.7894 2.14952 12.6178 2.353C12.4462 2.55647 12.3625 2.81978 12.385 3.085C12.4076 3.35022 12.5346 3.59562 12.738 3.76721C12.9415 3.93881 13.2048 4.02254 13.47 4H14C15.5913 4 17.1175 4.63214 18.2427 5.75736C19.3679 6.88258 20 8.4087 20 10C20 10.18 20 10.35 20 10.53C19.9779 10.7938 20.0612 11.0556 20.2318 11.2581C20.4024 11.4606 20.6463 11.5871 20.91 11.61H20.99C21.2404 11.611 21.482 11.5181 21.6671 11.3496C21.8523 11.1811 21.9675 10.9493 21.99 10.7C21.99 10.47 21.99 10.23 21.99 10C21.9901 7.88 21.1486 5.84668 19.6504 4.34668C18.1523 2.84667 16.12 2.00265 14 2ZM16 10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4805 10.8946 16.7348 11 17 11C17.2653 11 17.5196 10.8946 17.7072 10.7071C17.8947 10.5196 18 10.2652 18 10C18 8.93913 17.5786 7.92172 16.8285 7.17157C16.0783 6.42143 15.0609 6 14 6C13.7348 6 13.4805 6.10536 13.2929 6.29289C13.1054 6.48043 13 6.73478 13 7C13 7.26522 13.1054 7.51957 13.2929 7.70711C13.4805 7.89464 13.7348 8 14 8C14.5305 8 15.0392 8.21071 15.4143 8.58579C15.7893 8.96086 16 9.46957 16 10Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-gray-900">Téléphone</h3>
                                    <p className="text-lg text-gray-700 font-medium">
                                        <a href="tel:+33658285756" className="hover:text-amber-500">
                                            06 58 28 57 56
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-10">
                                <div className="max-w-xs mx-auto">
                                    <div className="inline-flex mb-6 items-center justify-center w-12 h-12 bg-green-600 rounded-full">
                                        <svg className="h-6 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.0001 4.48C16.4088 2.8887 14.2505 1.99472 12.0001 1.99472C9.74961 1.99472 7.59135 2.8887 6.00005 4.48C4.40875 6.0713 3.51477 8.22957 3.51477 10.48C3.51477 12.7304 4.40875 14.8887 6.00005 16.48L11.2701 21.76C11.363 21.8537 11.4736 21.9281 11.5955 21.9789C11.7173 22.0297 11.848 22.0558 11.9801 22.0558C12.1121 22.0558 12.2428 22.0297 12.3646 21.9789C12.4865 21.9281 12.5971 21.8537 12.6901 21.76L18.0001 16.43C19.5847 14.8453 20.4749 12.6961 20.4749 10.455C20.4749 8.21395 19.5847 6.06468 18.0001 4.48ZM16.5701 15L12.0001 19.59L7.43005 15C6.5272 14.0963 5.91253 12.9452 5.66375 11.6923C5.41497 10.4393 5.54324 9.14075 6.03236 7.96068C6.52147 6.78062 7.34947 5.77205 8.41168 5.06248C9.4739 4.35291 10.7226 3.97418 12.0001 3.97418C13.2775 3.97418 14.5262 4.35291 15.5884 5.06248C16.6506 5.77205 17.4786 6.78062 17.9677 7.96068C18.4569 9.14075 18.5851 10.4393 18.3364 11.6923C18.0876 12.9452 17.4729 14.0963 16.5701 15ZM9.00005 7.41C8.19277 8.21977 7.73945 9.31657 7.73945 10.46C7.73945 11.6034 8.19277 12.7002 9.00005 13.51C9.59981 14.1108 10.3636 14.5211 11.1957 14.6894C12.0278 14.8577 12.891 14.7766 13.6771 14.4562C14.4632 14.1357 15.1372 13.5903 15.6145 12.8883C16.0918 12.1862 16.3512 11.3589 16.3601 10.51C16.3646 9.94321 16.2554 9.38126 16.039 8.85739C15.8225 8.33352 15.5033 7.85836 15.1001 7.46C14.7037 7.05458 14.2311 6.73154 13.7095 6.50947C13.1878 6.2874 12.6274 6.17068 12.0605 6.16603C11.4935 6.16138 10.9313 6.2689 10.406 6.48239C9.8808 6.69588 9.40297 7.01113 9.00005 7.41ZM13.6901 12.09C13.3111 12.4747 12.8103 12.7159 12.2732 12.7723C11.7361 12.8286 11.1961 12.6966 10.7456 12.3989C10.295 12.1012 9.96185 11.6562 9.80306 11.1401C9.64427 10.6239 9.6697 10.0686 9.87501 9.56916C10.0803 9.06967 10.4528 8.65702 10.9286 8.40174C11.4045 8.14646 11.9543 8.06441 12.484 8.16962C13.0137 8.27483 13.4904 8.56076 13.8326 8.97853C14.1748 9.39631 14.3612 9.91997 14.3601 10.46C14.3455 11.0773 14.0865 11.6635 13.6401 12.09H13.6901Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-gray-900">Bureau</h3>
                                    <p className="text-lg text-gray-700 font-medium mb-2">127 cavée bruyet 60140 Labruyère</p>
                                    <p className="text-base text-gray-600 mb-1">Siren: 930 346 952</p>
                                    <p className="text-base text-gray-600 mb-1">Siret : 930 346 952 00011</p>
                                    <p className="text-base text-gray-600">Numéro RCS : 930 346 952 R.C.S. Beauvais</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-10">
                                <div className="max-w-xs mx-auto">
                                    <div className="inline-flex mb-6 items-center justify-center w-12 h-12 bg-green-600 rounded-full">
                                        <svg className="h-6 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM8 20H4V16H8V20ZM8 14H4V10H8V14ZM8 8H4V4H8V8ZM14 20H10V16H14V20ZM14 14H10V10H14V14ZM14 8H10V4H14V8ZM20 20H16V16H20V20ZM20 14H16V10H20V14ZM20 8H16V4H20V8Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <h3 className="mb-6 text-xl font-bold text-gray-900">Réseaux Sociaux</h3>
                                    <div className="flex space-x-4">
                                        <a className="inline-block text-green-600 hover:text-amber-500" href="https://www.facebook.com/profile.php?id=61564304302036" aria-label="Facebook">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M13.6345 20.9987V12.801H16.3103L16.7172 9.59193H13.6345V7.54752C13.6345 6.62296 13.8921 5.98878 15.2017 5.98878L16.8169 5.98809V3.12671C16.5241 3.08763 15.5749 3 14.4659 3C12.1547 3 10.5491 4.40845 10.5491 7.23071V9.59193H7.86523V12.801H10.5491V20.9987H13.6345Z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                        <a className="inline-block text-green-600 hover:text-amber-500" href="https://www.instagram.com/chemineesdunordfr/" aria-label="Instagram">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 3C9.5556 3 9.2496 3.01 8.2896 3.054C7.3314 3.098 6.6768 3.252 6.1044 3.472C5.5044 3.7 4.9602 4.01 4.5102 4.51C4.0098 4.96 3.6996 5.504 3.4722 6.104C3.2526 6.677 3.0984 7.331 3.0546 8.29C3.0102 9.25 3.0002 9.556 3.0002 12C3.0002 14.444 3.0102 14.75 3.0546 15.71C3.0984 16.669 3.2526 17.323 3.4722 17.896C3.6996 18.496 4.0098 19.04 4.5102 19.49C4.9602 19.99 5.5044 20.3 6.1044 20.528C6.6768 20.748 7.3314 20.902 8.2896 20.946C9.2496 20.99 9.5556 21 12 21C14.4444 21 14.7504 20.99 15.7104 20.946C16.6686 20.902 17.3232 20.748 17.8956 20.528C18.4956 20.3 19.0398 19.99 19.4898 19.49C19.9902 19.04 20.3004 18.496 20.5278 17.896C20.7474 17.323 20.9016 16.669 20.9454 15.71C20.9898 14.75 20.9998 14.444 20.9998 12C20.9998 9.556 20.9898 9.25 20.9454 8.29C20.9016 7.331 20.7474 6.677 20.5278 6.104C20.3004 5.504 19.9902 4.96 19.4898 4.51C19.0398 4.01 18.4956 3.7 17.8956 3.472C17.3232 3.252 16.6686 3.098 15.7104 3.054C14.7504 3.01 14.4444 3 12 3ZM12 4.622C14.4036 4.622 14.688 4.63 15.6408 4.674C16.5144 4.714 16.9908 4.862 17.3082 4.984C17.7282 5.144 18.0282 5.34 18.3486 5.659C18.6684 5.979 18.8638 6.279 19.0236 6.699C19.1458 7.017 19.2936 7.493 19.3336 8.367C19.3776 9.32 19.3858 9.604 19.3858 12.008C19.3858 14.412 19.3776 14.696 19.3336 15.649C19.2936 16.523 19.1458 16.999 19.0236 17.317C18.8638 17.737 18.6684 18.037 18.3486 18.357C18.0282 18.677 17.7282 18.872 17.3082 19.032C16.991 19.154 16.5144 19.302 15.6408 19.342C14.688 19.386 14.4036 19.394 12 19.394C9.5958 19.394 9.312 19.386 8.3592 19.342C7.4856 19.302 7.0092 19.154 6.6912 19.032C6.2718 18.872 5.9718 18.677 5.6508 18.357C5.3316 18.037 5.1356 17.737 4.9764 17.317C4.8542 16.999 4.7064 16.523 4.6664 15.649C4.6224 14.696 4.6142 14.412 4.6142 12.008C4.6142 9.604 4.6224 9.32 4.6664 8.367C4.7064 7.493 4.8542 7.017 4.9764 6.699C5.1356 6.279 5.3316 5.979 5.6508 5.659C5.9718 5.34 6.2718 5.144 6.6912 4.984C7.0092 4.862 7.4856 4.714 8.3592 4.674C9.312 4.63 9.5958 4.622 12 4.622ZM12 7.378C9.4476 7.378 7.378 9.448 7.378 12C7.378 14.552 9.4476 16.622 12 16.622C14.5524 16.622 16.622 14.552 16.622 12C16.622 9.448 14.5524 7.378 12 7.378ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15ZM17.884 7.188C17.884 7.765 17.4143 8.234 16.838 8.234C16.2616 8.234 15.792 7.765 15.792 7.188C15.792 6.612 16.2616 6.142 16.838 6.142C17.4143 6.142 17.884 6.612 17.884 7.188Z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 px-4">
                        <div className="px-6 py-8 md:p-10 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">Envoyez-nous un message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label className="block mb-2 text-gray-800 font-medium leading-6" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="block w-full py-3 px-4 appearance-none border border-gray-200 rounded-lg shadow-sm text-gray-700 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border-green-500 transition-colors"
                                        type="email"
                                        placeholder="dupont@hotmail.fr"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-gray-800 font-medium leading-6" htmlFor="phone">
                                        Téléphone
                                    </label>
                                    <input
                                        className="block w-full py-3 px-4 appearance-none border border-gray-200 rounded-lg shadow-sm text-gray-700 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border-green-500 transition-colors"
                                        type="tel"
                                        placeholder="06 12 34 56 78"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-gray-800 font-medium leading-6" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        className="block h-32 md:h-48 w-full py-3 px-4 appearance-none border border-gray-200 rounded-lg shadow-sm text-gray-700 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border-green-500 transition-colors placeholder-gray-400 resize-none"
                                        placeholder="Bonjour, je souhaiterais avoir quelques informations..."
                                        value={message}
                                        onChange={handleMessageChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-gray-800 font-medium leading-6" title="Veuillez résoudre ce captcha par mesure de sécurité" htmlFor="captcha">
                                        {`CAPTCHA: ${captchaValue}`}
                                    </label>
                                    <input
                                        className="block w-full py-3 px-4 appearance-none border border-gray-200 rounded-lg shadow-sm text-gray-700 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 focus:border-green-500 transition-colors"
                                        type="text"
                                        placeholder="Résultat"
                                        value={captchaInputValue}
                                        onChange={handleCaptchaInputChange}
                                        required
                                    />
                                </div>
                                <button
                                    className="block w-full py-4 px-6 text-lg leading-6 text-white font-medium text-center bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-sm transition-colors duration-300"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Envoi en cours...
                                        </span>
                                    ) : 'Envoyer'
                                    }
                                </button>
                            </form>
                            
                            {confirmationMessage && (
                                <div className={`mt-6 p-4 border-l-4 ${confirmationMessage.includes('erreur') ? 'bg-red-50 border-red-500 text-red-800' : 'bg-green-50 border-green-500 text-green-800'} rounded-lg shadow-sm`} role="alert">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            {confirmationMessage.includes('erreur') ? (
                                                <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium">{confirmationMessage}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Carte Google Maps */}
                        <div className="mt-8 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.4394122026666!2d2.5732419762919856!3d49.30711626093746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7d107cdd0f89d%3A0xa24ebf251c31f3a!2s127%20Rue%20Cav%C3%A9e%20Bruyet%2C%2060140%20Labruyer!5e0!3m2!1sfr!2sfr!4v1709319106575!5m2!1sfr!2sfr" 
                                width="100%" 
                                height="300" 
                                style={{ border: 0 }} 
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localisation Cheminées du Nord"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactClient;
