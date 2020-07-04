import React from 'react'

export default props => {
    const { min, max } = props
    const random = parseInt(Math.random() * (max - min) + min)
    return (
        <div>
            <h2> Valor Aleatorio</h2>
            <p>
                <strog>Valor Mínimo: </strog> {min}
            </p>
            <p>
                <strog>Valor Máximo: </strog> {max}
            </p>
            <p>
                <strog>Valor Escolhido: </strog> {random}
            </p>
        </div>
    )
}
