import { Link } from "react-router-dom";
import { HomeEsqueceuSenha } from "../../style/styled";

export default function EsqueceuSenha() {
  return (
    <HomeEsqueceuSenha>
        <main>
      <div className="cadastro-container">
        <h1>Cadastre-se e conheça a nossa plataforma</h1>
        <div className="no-account-container">
          <p>Já tem uma conta?</p>
          <Link to={"/entrar"}> <p className="p-create-account">Entrar</p></Link>
        </div>
      </div>
      <div className="form-container">
        <form action="" className="form">
          <h2>Esqueceu sua senha ?</h2>
          <div className="input-container-login">
            <div className="div-form-container">
              <label className="label-email">E-mail:</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="div-form-container">
              <label className="label-password">Código:</label>
              <input type="code" id="code" name="code" className="input" />
            </div>
          </div>
          <button type="submit" className="submit" id="submitForgotPassword">
            Enviar
          </button>
        </form>
      </div>
    </main>
    </HomeEsqueceuSenha>
  )
}
