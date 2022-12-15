import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Header() {

    return (
        <nav>
            <Link to='/' className='link' >
                <div className='box'>
                    <div className='number'>1.</div>
                    <div>About</div>
                </div>
            </Link>

            <Link to='/projetos' className='link'>
                <div className='box'>
                    <div className='number'>2.</div>
                    <div>Projects</div>
                </div>
            </Link>

            <Link to='/contato' className='link'>
                <div className='box'>
                    <div className='number'>3.</div>
                    <div>Contact</div>
                </div>
            </Link>
        </nav>
    )
}

