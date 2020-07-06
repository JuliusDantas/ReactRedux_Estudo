import './App.css'
import React from 'react'

import ProductTable from './repetition/ProductTable'
import StudentList from './repetition/StudentList'
import Family from './basic/Family'
import FamilyMember from './basic/FamilyMember'
import First from './basic/First'
import WithParameter from './basic/WithParameter'
import Fragment from './basic/Fragment'
import Random from './basic/Random'
import Card from './Layout/Card'

export default _ =>

    <div className="app">
        <h1>Fundamentos React 2</h1>

        <div className="geral">
            <Card titulo="Tabela Preço Produtos">
                <ProductTable />
            </Card>
            <Card titulo="Repetição">
                <StudentList />
            </Card>
            <Card titulo="Componente com Filhos" color="#004d40">
                <Family sname="Dantas">
                    <FamilyMember name="Julius"/>
                    <FamilyMember name="Maria" />
                    <FamilyMember name="Henrique" sname="Cardoso"/>
        
                </Family>
            </Card>

            <Card titulo="Desafio Aleatório" color="#004d40">
                <Random min={1} max={60} colorBody="#4db6ac"></Random>
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
