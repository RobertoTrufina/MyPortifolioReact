import React from "react"
import './styles.css'

export default function Menu() {
    return (
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
    )

}
