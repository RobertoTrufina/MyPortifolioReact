import React from 'react'

import css from '../../imgs/css.png'
import github from '../../imgs/github.png'
import html from '../../imgs/html.png'
import react from '../../imgs/react.png'

import './styles.css'

export default function CardCrud() {
    return (
        <div className='content-projectskill'>
            <div className='box-projectskill'>
                <span>Crud</span>
                <div>
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={react} alt="" />
                </div>
            </div>
            <div className='wrap-preview'>
                <div className='btn-github'>
                    <a href="https://github.com/RobertoTrufina/crud-react-hooks">
                        <img src={github} alt="ToDoList" />

                    </a>
                </div>
                <div className='btn-preview'>
                    <h6>Preview</h6>
                </div>
            </div>
        </div>
    )
}
