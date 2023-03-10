import React from 'react'

import css from '../../imgs/css.png'
import github from '../../imgs/github.svg'
import html from '../../imgs/html.png'
import react from '../../imgs/react.png'

import './styles.css'

export default function Cards() {
    return (
        
        <div className='container-projectskill'>
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
                        <a href="https://github.com/RobertoTrufina/crud-react-hooks" target="_blank" >
                            <img src={github} alt="ToDoList" />
                        </a>
                    </div>
                    <div className='btn-preview'>
                 
                        <a href="https://inquisitive-liger-8afaee.netlify.app" target="_blank">
                            <h6>Preview</h6>
                        </a>
                    </div>
                </div>
            </div>

            <div className='content-projectskill'>
                <div className='box-projectskill'>
                    <span>To do List</span>
                    <div>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={react} alt="" />
                    </div>
                </div>
                <div className='wrap-preview'>
                    <div className='btn-github'>
                        <a href="https://github.com/RobertoTrufina/TodoListReact" target="_blank">
                            <img src={github} alt="ToDoList" />
                        </a>
                    </div>
                    <div className='btn-preview'>
                        <h6>Preview</h6>
                    </div>
                </div>
            </div>

            <div className='content-projectskill'>
                <div className='box-projectskill'>
                    <span>To do List</span>
                    <div>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={react} alt="" />
                    </div>
                </div>
                <div className='wrap-preview'>
                    <div className='btn-github'>
                        <a href="https://github.com/RobertoTrufina/TodoListReact" target="_blank">
                            <img src={github} alt="ToDoList" />
                        </a>
                    </div>
                    <div className='btn-preview'>
                        <h6>Preview</h6>
                    </div>
                </div>
            </div>

        </div>
    )
}
