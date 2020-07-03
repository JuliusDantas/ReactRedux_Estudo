import React from 'react'

export default function WithParameter(props){
    const status = props.nota >=7 ? 'Apovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota)
    return (
        <div className='WithParameter'>
            <h2> { props.titulo } </h2>
            <h3> { props.subtitulo } </h3>
            <p> { props.aluno }</p>
            <p> { props.nota }</p>
            <p> { props.nota }</p>
            <p> { status }</p>
        </div>
    )   
}