import './ProductTable.css'
import React from 'react'

import product from '../../data/product'

export default props => {

    function GetLines () {
        return product.map((prod, i) =>{
            return (
                <tr kei={prod.id} 
                    className={ i % 2 === 0 ? "par" : "impar"}>
                    <td>
                        {prod.id}
                    </td>
                    <td>
                        {prod.nome}
                    </td>
                    <td className="valor">
                        R$ {prod.preco.toFixed(2).replace('.', ',')}
                    </td>
                </tr>
            )
        }
        )
    }

    return(
        <div className="tablelist">
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {GetLines()}
                </tbody>
            </table>
        </div>
    )
}