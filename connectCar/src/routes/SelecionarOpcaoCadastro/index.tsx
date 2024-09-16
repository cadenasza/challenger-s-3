import { Link } from "react-router-dom";
import {PrincipalSelecionar } from "../../style/styled";
import { IoMdArrowRoundBack } from "react-icons/io";


export default function SelecionarOpcaoCadastro() {
  return (
    <main>
        <PrincipalSelecionar>
            <div className="principal">
            <div className="voltar">
               <Link to={"/"}><IoMdArrowRoundBack /> </Link>
            </div>
            <div className="div-container">
                <h1>Selecione uma opção para registrar</h1>
                <div className="button-container">
                    <button>Mecânico</button>
                    <button>Cliente</button>
                </div>
            </div>
            </div>
        </PrincipalSelecionar>
    </main>
  )
}
