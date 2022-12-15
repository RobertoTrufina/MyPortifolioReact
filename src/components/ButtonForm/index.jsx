import React from 'react'
import { Link } from 'react-router-dom'



import './styles.css'

export default function ButtonForm() {
    return (
        <Link to='/' className='link-btn-form'>
            <div className='btn-form'>
                Submit 
            </div>
        </Link>
    )
}
