import React from 'react'

import bootstrap from '../../imgs/bootstrap.png'
import css from '../../imgs/css.png'
import facebook from '../../imgs/facebook.svg'
import github from '../../imgs/github.svg'
import html from '../../imgs/html.png'
import js from '../../imgs/js.png'
import linkedin from '../../imgs/linkedin.svg'
import react from '../../imgs/react.png'
import whatsapp from '../../imgs/whatsapp.svg'

import { BsChevronDoubleDown } from "react-icons/bs"

import Cards from '../../components/Cards/index'
import './styles.css'

export default function Home() {

    return (
        <div className='global'>
            <header className='content-header'>
                <nav className='btn'>
                    <button className='btn-header'>
                        <a href="#about">about</a>
                    </button>
                    <button className='btn-header'>
                        <a href="#projects">projects</a>
                    </button>
                    <button className='btn-header'>
                        <a href="#contacts">contacts</a>
                    </button>
                </nav>
            </header>

            <main className='container' id='about'>
                <section >
                    <div className='profile'>
                        <h2 >
                            <p className='p-profile'>Hello, I am <strong>Roberto</strong></p>
                            <p className='p-profile'>Front End Developer</p>
                        </h2>
                        <img src="https://avatars.githubusercontent.com/u/100736661?v=4" />
                    </div>

                    <h1>About me</h1>
                    <p className='about-me'>
                        I currently live in Caucaia-Ce, I love technology and I have a lot of curiosity and interest in the development area to create projects and solve problems.
                    </p>

                    <div className='down-arrow'>
                    </div>

                    <h2><strong>Skills</strong> and tools</h2>
                    <br />
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
                        <br />
                        <p>Take a look at what we´ve created and be inspired  by.</p>
                    </div>

                    <div className='box-cards'>
                        <Cards />
                    </div>

                    <div className='down-arrow' >
                        <BsChevronDoubleDown />
                    </div>
                </section>
                <section id='contacts'>
                    <h2 >
                        My <strong>Contacts</strong>
                    </h2>
                    <br />
                    <p>
                        Get in touch
                        either by email or through may social media.
                    </p>
                    <form>
                        <label>Nome</label>
                        <input type="text" placeholder='Digite seu nome' />
                        <label>E-mail</label>
                        <input type="email" placeholder='Digite seu e-mail' />
                        <label>Assunto</label>
                        <textarea name="" id="" cols="30" rows="7" placeholder='Digite sua mensagem...' className='form-textarea'></textarea>
                        <button type='submit' className='btn-form'>Enviar</button>

                        <div id='grid-contacts'>
                            <a href="https://www.linkedin.com/in/roberto-pinto-3a747522a/" target="_blank">
                                <img src={linkedin} />
                            </a>
                            <a href="http://wa.me/message/JSSNPVEDUAYJP1" target="_blank">
                                <img src={whatsapp} />
                            </a>
                            <a href="https://github.com/RobertoTrufina" target="_blank">
                                <img src={github} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100074199661890" target="_blank">
                                <img src={facebook} />
                            </a>
                        </div>
                    </form>


                </section>
            </main>
        </div>
    )
}
