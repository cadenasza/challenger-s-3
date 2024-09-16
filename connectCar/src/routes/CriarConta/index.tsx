import { IoMdArrowRoundBack } from "react-icons/io";
import { HomeCriarConta } from "../../style/styled";
import { FaCamera } from "react-icons/fa";

export default function CriarConta() {
  return (
    <main>
        <HomeCriarConta>
        <div className="div-principal-criar-conta">
        <div className="header-main-container">
        <h1>Cadastro Cliente</h1>
        <div className="div-a-container">
          <a href="#"><IoMdArrowRoundBack /> Voltar</a>
        </div>
      </div>

      <section className="input-container">
        <div className="inputs">
          <div className="div-form-container">
            <label className="label-date">Data de nascimento:</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="div-form-container">
            <label className="label-telefone">Telefone:</label>
            <input type="number" id="telefone" name="telefone" />
          </div>
          <div className="div-form-container">
            <label className="label-cpf">CPF:</label>
            <input type="number" id="cpf" name="cpf" />
          </div>
          <div className="div-form-container">
            <label className="label-rg">RG:</label>
            <input type="number" id="rg" name="rg" />
          </div>
        </div>
        <div className="inputs">
          <div className="div-form-container">
            <label className="label-cnh">CNH:</label>
            <input type="number" id="cnh" name="cnh" />
          </div>
          <div className="div-form-container" id="cam-container">
            <div>
            <label className="profile-image-label"
              >Imagem de Perfil:</label>
              </div>
            <FaCamera className="cam-icon-input" />
              
            
          </div>
            <button className="submit">Continuar</button>
        </div>
      </section>
      </div>
      </HomeCriarConta>
    </main>
  )
};
