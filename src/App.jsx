import React from 'react'

import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './components/basic/Fragment'

export default function App(props){
    return(
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
        
            <Fragment />
        </div>
    )
}