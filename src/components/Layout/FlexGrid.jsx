import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

export default props => {

    return (
        <>
            <div className="saibamais">
                <div className="titulo">
                    <h1>Ficou com alguma dúvida?</h1>
                </div>
                <div className="stitulo">
                    <h4>Fale com a gente por email, telefone ou whatsapp.</h4>
                </div>
                <div className="main">
                    <div className="ic"><FontAwesomeIcon icon={faMailBulk} className="icon"  size="5x"/></div>
                    <div className="tx">atendimento@finazul.com.br</div>
                </div>
                <div className="aside">
                    <div className="ica"><FontAwesomeIcon icon={faWhatsappSquare} className="icon"  size="5x"/></div>
                    <div className="txa">(71) 9 9200-0994</div>
                </div>
            </div>
        </>
    )
}