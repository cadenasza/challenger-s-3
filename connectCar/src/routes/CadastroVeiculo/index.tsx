import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HomeCadastroVeiculo } from "../../style/styled";

export default function CadastroVeiculo() {
  return (
    <HomeCadastroVeiculo>
        <main>
        <div className="header-main-container">
        <h1>Cadastro Veículo</h1>
        <div className="div-a-container">
          <Link to={"/criar"} >
          <IoMdArrowRoundBack className="arrow-left" />
            <p className="p-back">Voltar</p>
          </Link>
        </div>
      </div>
      <section className="input-container">
        <div className="inputs">
          <div className="div-form-container">
            <label className="label-placa">Placa:</label>
            <input type="text" id="placa" name="placa" />
          </div>
          <div className="div-form-container">
            <label className="label-chassi">Número de Chassi:</label>
            <input type="text" id="chassi" name="chassi" />
          </div>
          <div className="div-form-container">
            <label className="label-marca">Marca:</label>
            <input type="text" id="marca" name="marca" />
          </div>
        </div>
        <div className="inputs">
          <div className="div-form-container">
            <label className="label-modelo">Modelo:</label>
            <input type="text" id="modelo" name="modelo" />
          </div>
          <div className="div-form-container">
            <label className="label-cor">Cor:</label>
            <input type="text" id="cor" name="cor" />
          </div>
            <button className="submit">Cadastrar</button>
        </div>
      </section>
      </main>
    </HomeCadastroVeiculo>
  )
}
