import './App.css'
import React from 'react'

import First from './basic/First'
import WithParameter from './basic/WithParameter'
import Fragment from './basic/Fragment'
import Random from './basic/Random'
import Card from './Layout/Card'

export default _ =>

    <div className="app">
        <h1>Fundamentos React 2</h1>

        <div className="geral">
            <Card titulo="Desafio Aleatório">
                <Random min={1} max={60} />
            </Card>

            <Card titulo="Fragmentos">
                <Fragment />
            </Card>

            <Card titulo="Nota Aluno">
                <WithParameter
                    titulo="Situação do Aluno"
                    aluno="Julius Dantas"
                    nota={9.1} />

                
            </Card>

            <Card titulo="Primeiro Componente">
                <First></First>
            </Card>

        </div>

    </div>
