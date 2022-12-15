import React from 'react'
import { Link } from 'react-router-dom'



import './styles.css'

export default function ButtonContact() {
    return (
        <Link to='/' className='link-btn-contact'>
            <div className='btn-contact'>
                Let´s get in touch!
            </div>
        </Link>
    )
}
