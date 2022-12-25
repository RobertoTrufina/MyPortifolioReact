import React from 'react'

import ButtonContact from '../../components/ButtonContact'

import bootstrap from '../../imgs/bootstrap.png'
import css from '../../imgs/css.png'
import html from '../../imgs/html.png'
import js from '../../imgs/js.png'
import react from '../../imgs/react.png'


import { BsChevronDoubleDown } from "react-icons/bs"
import CardCrud from '../../components/CardCrud'
import CardTodoList from '../../components/CardTodoList'
import ButtonForm from './../../components/ButtonForm/index'
import CardLogin from './../../components/CardLogin/index'
import './styles.css'

export default function Home() {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="#about">about</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contacts">contacts</a></li>
                </ul>
            </nav>

            <main className='container'>
                <section id='about'>
                    <div className='profile'>
                        <h2>
                            <p className='p-profile'>Hello, I am <strong>Roberto</strong></p>
                            <p className='p-profile'>Front End Developer</p>
                        </h2>
                        <img src="https://avatars.githubusercontent.com/u/100736661?v=4" />
                    </div>

                    <h1>About me</h1>
                    <p className='about-me'>
                        I currently live in Caucaia-Ce, I love technology and have a lot of curiosity and interest in the area of ​​development to build and solve web problems.
                    </p>
                    <ButtonContact />

                    <div className='down-arrow'>
                    </div>

                    <h2><strong>Skills</strong> and tools</h2>

                    <p>For a more detailed overviw, please fell free to check the tools that were used on a per-project basis.</p>

                    <div className='img-skills'>
                        <img src={html} />
                        <img src={css} />
                        <img src={js} />
                        <img src={react} />
                        <img src={bootstrap} />
                    </div>
                </section>

                <section id="projects">
                    <div className='down-arrow'>
                        <BsChevronDoubleDown />
                    </div>

                    {/* PROJECTS */}

                    <div className='box-some-projects'>
                        <h2 className='some-projects'>
                            Some <strong>Projects</strong>
                        </h2>
                        <p>
                            Take a look at what we´ve created and be inspired  by.
                        </p>
                    </div>
                    <div className='box-cards'>
                        <CardLogin />
                        <CardCrud />
                        <CardTodoList />
                    </div>
                </section>

                <section id="contacts">
                    <div className='down-arrow'>
                        <BsChevronDoubleDown />
                    </div>

                    <h2>
                        My <strong style={{ color: 'green', }}>Contacts</strong>
                    </h2>
                    <p style={{ color: '#666' }}>
                        Get in touch
                        either by email or through may social media.
                    </p>

                    <div className='container-form'>

                        <form>
                            <div className='box-form'>
                                <div className='input-contact'>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Name'
                                    />
                                    <input
                                        type="email"
                                        name="name"
                                        placeholder='Email'
                                    />
                                </div>

                            </div>

                            <div className='box-form'>
                                <div className='input-contact'>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Last name'
                                    />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Phone'
                                    />
                                </div>
                            </div>

                            <textarea placeholder='Message'></textarea>

                        </form>

                    </div>

                    <div className='btn_form'>
                        <ButtonForm />
                    </div>
                </section>

            </main>




        </>

    )
}
