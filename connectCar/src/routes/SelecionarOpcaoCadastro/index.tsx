import { Link } from "react-router-dom";
import {PrincipalSelecionar } from "../../style/styled";
import { IoMdArrowRoundBack } from "react-icons/io";


export default function SelecionarOpcaoCadastro() {
  return (
        <PrincipalSelecionar>
          <main>
            <div className="voltar">
               <Link to={"/"}><IoMdArrowRoundBack /><p className="p-back">Voltar</p> </Link>
            </div>
            <div className="div-container">
                <h1>Selecione uma opção para registrar</h1>
                <div className="button-container">
                    <Link to={"/cadastro/mecanico"}><button>Mecânico</button></Link>
                    <Link to={"/cadastro/cliente"}><button>Cliente</button></Link>
                </div>
            </div>
            </main>
        </PrincipalSelecionar>
  )
}
