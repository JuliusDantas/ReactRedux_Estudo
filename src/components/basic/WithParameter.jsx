import React from 'react'

export default function WithParameter(props) {
    const status = props.nota >= 7 ? 'Apovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2> {props.titulo} </h2>
            <h3> {props.subtitulo} </h3>
            <p> {props.aluno}</p>
            <p> {notaInt}</p>
            <p> {props.nota}</p>
            <p> {status}</p>
        </div>
    )
}