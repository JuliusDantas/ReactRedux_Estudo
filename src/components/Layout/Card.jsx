import './Card.css'
import React from 'react'


export default props => {

    const estilo = {
        backgroundColor: props.color || '#795548',
        borderColor: props.color || '#795548'
    }

    
    return (
        <div className="card" style={estilo}>
            <div className="title">{props.titulo}</div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );

};