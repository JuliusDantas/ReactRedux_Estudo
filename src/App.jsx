import React from 'react'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'
import Random from './components/basic/Random'

export default _ =>

    <div id="app">
        <h1>Fundamentos React 2</h1>
        <Random min={1} max={60} />
        <Fragment />
        <WithParameter
            titulo="Situação do Aluno"
            aluno="Julius Dantas"
            nota={9.1} />

        <WithParameter
            titulo="Situação do Aluno"
            aluno="José Carlos"
            nota={9.3} />
        <WithParameter
            titulo="Situação do Aluno"
            aluno="Antonio Santos"
            nota={5.9} />

        <First></First>
    </div>
