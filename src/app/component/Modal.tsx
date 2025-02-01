import React from 'react';
import { useState, useEffect } from 'react'
import { IoIosClose } from "react-icons/io";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Button from './ui/Button';

const Modal = () => {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        document.body.className = modal ? 'overflow-y-hidden' : '';
    }, [modal]);

    return (
    <section>
        <Button onClick={() => setModal(!modal)} description='Know more about me'/>
        {modal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"/>
                        <div className="modal-content bg-white p-7 rounded-md shadow-xl max-w-lg w-80 md:w-full m-auto relative z-50">
                            <h1 className='bg-gradient-to-r from-blue-900 to-purple-200 text-transparent bg-clip-text text-xl font-bold mb-3'>
                                Education
                            </h1>
                            <h2 className='text-black font-bold'>
                                Institut Teknologi Bandung
                            </h2>
                            <p className='text-black text-sm mb-3'>
                                Informatics Engineering (2023 - present)
                            </p>
                            <h2 className='text-black font-bold'>
                                SMAN 2 Bandar Lampung
                            </h2>
                            <p className='text-black text-sm mb-5'>
                                Natural Science (2021 - 2023)
                            </p>
                            <h1 className='bg-gradient-to-r from-blue-900 to-purple-200 text-transparent bg-clip-text text-xl font-bold mb-3'>
                                Interests
                            </h1>
                            <p className='text-black text-sm mb-7'>
                               <li>Web Development</li>
                               <li>UI/UX Design</li>
                               <li>Artificial Intelligence</li>
                               <li>Machine Learning</li>
                            </p>
                            <div className='flex gap-3 text-black'>
                                <a href='https://www.github.com/adndax/' target='_blank' className=''>
                                    <FaGithub size='30'/>
                                </a>
                                <a href='https://www.linkedin.com/in/adindaptri/' target='_blank'>
                                    <FaLinkedin size='30'/>
                                </a>
                                <a href='https://www.instagram.com/_adndaptri/' target='_blank'>
                                    <FaInstagram size='30'/>
                                </a>
                            </div>
                            <button 
                                className='text-black close-modal absolute top-2.5 right-2.5 text-lg p-2 cursor-pointer'
                                onClick={() => setModal(false)}>
                                <IoIosClose size='30px' />
                            </button>
                    </div>
                </div>
            )}
    </section>
    )
}

export default Modal