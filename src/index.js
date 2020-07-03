import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import { render } from '@testing-library/react'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'


const tag= <strong>do React</strong>
ReactDOM.render(
   <>
        <div>
            <h1>Olá Mundo </h1> {tag}
        </div>
        <div id="app">
            <First></First>
            <WithParameter 
                titulo="Situação do Aluno"
                aluno="Julius Dantas"
                nota={9.1}/>
            
            <WithParameter 
                titulo="Situação do Aluno"
                aluno="José Carlos"
                nota={9.3}/>
            <WithParameter 
                 titulo="Situação do Aluno"
                aluno="Antonio Santos"
                nota={5.9}/>
        </div>
        <div className="row">
            <div className="Fragment col-4">
                <Fragment />
            </div>
        </div>
    </>,
    document.getElementById('root')
    )