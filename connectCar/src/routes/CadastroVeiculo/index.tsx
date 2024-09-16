
import { PagCadastrarVeiculo } from "../../style/styled";

export default function CadastroVeiculo() {
    return (
     <PagCadastrarVeiculo>
         <main>
          <div className="cadastro-veiculo-container">
            <h1>Cadastro veículo</h1>
            <p> Voltar </p>
            <img src="../" alt="react logo"/>
          </div>

          <form>
            <div className="inputs">
                <div className="input-container">
                    <label>Placa: <input className="placa" /> </label>
                </div>
                <div className="input-container">
                    <label>Número de chassi: <input className="chassi" type="text"  /></label>
                </div>
                <div className="input-container">
                    <label>Marca: <input className="marca" type="text"  /> </label>
                </div>
            </div>

            <div className="inputs">
                <div className="input-container">
                    <label>Modelo: <input className="modelo" type="text"  /> </label>
                </div>
                <div className="input-container">
                    <label>Cor: <input className="cor" type="text" /> </label>
                </div>
            </div>

            <button className="submit">Cadastrar </button>

          </form>

      </main>
     </PagCadastrarVeiculo>
    );
  }
  