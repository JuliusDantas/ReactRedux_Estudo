import React from 'react';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Portability from "../../img/portability.png"
import Refinancing from "../../img/refinancing.png"
import Creditcard from "../../img/creditcard.jpg"
import Loan from "../../img/loan.png"

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

export default props =>{

    return(
        <>
            <Container>
                <div className="container-responsive">
                    <div className="card-responsive">
                        <div className="circle-responsive">
                            <img src={Portability} alt="Logo FinAzul" />
                        </div>
                        <div className="content-responsive">
                            <h2>Portabilidade</h2>
                            <p><strong>Reduza o valor das parcelas de seus consignados</strong> e saia do sufoco
                                Escolha receber um <strong>valor dinheiro na sua conta se você precisar
                                Taxas de juros a partir de 1.27%</strong>.
                            </p>
                            <Link
                                component="button"
                                variant="body2"
                                className="link"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                Simule agora
                            </Link>
                        </div>
                    </div>
                    <div className="card-responsive">
                        <div className="circle-responsive">
                            <img src={Refinancing} alt="Logo FinAzul" />
                        </div>
                        <div className="content-responsive">
                            <h2>Refinanciamento</h2>
                            <p>
                            <strong>Receba dinheiro na conta de uma forma mais rápida</strong> se você já tem um consignado.
                            <strong>Troque os juros maiores de seus empréstimos consignado</strong> por outros juros mais baixos e tenha mais dinheiro na conta.
                            <strong>Taxas de juros a partir de 1.70%</strong>

                            </p>
                            <Link
                                component="button"
                                variant="body2"
                                className="link"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                Simule agora
                            </Link>
                        </div>
                    </div>
                    <div className="card-responsive">
                        <div className="circle-responsive">
                            <img src={Creditcard} alt="Logo FinAzul" />
                        </div>
                        <div className="content-responsive">
                            <h2>Cartão consignado</h2>
                            <p>
                                Faça compras ou <strong>tenha dinheiro na conta mesmo negativado</strong>
                                Taxas de juros até <strong>4x menor que um cartão de crédito convencional</strong>
                                Tudo isso disponível para você sem pagar anuidade
                            </p>
                            <Link
                                component="button"
                                variant="body2"
                                className="link"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                Simule agora
                            </Link>
                        </div>
                    </div>
                    <div className="card-responsive">
                        <div className="circle-responsive">
                            <img src={Loan} alt="Logo FinAzul" />
                        </div>
                        <div className="content-responsive">
                            <h3>Novo empréstimo</h3>
                            <p>
                                Receba o dinheiro da conta de forma <b>mais rápida e sem burocracia
                                Empréstimo até 3x mais baratas</b> do que os empréstimos convencionais
                                Acessível também para negativados. <b>Sem consulta ao SPC ou SERASA
                                Taxas de juros a partir de 1.42%</b>
                            </p>
                            <Link
                                component="button"
                                variant="body2"
                                className="link"
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                Simule agora
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )

}