
import { Link } from "react-router-dom";
import { HomeCriarConta } from "../../style/styled";

export default function CriarContas() {
  return (
    <main>
        <HomeCriarConta>
        <div className="cadastro-container">
        <h1>Cadastre-se e conheça a nossa plataforma</h1>
        <div className="no-account-container">
          <p>Já tem uma conta?</p>
          <Link to={"/entrar"}><p className="p-create-account">Entrar</p></Link>
        </div>
      </div>
      <div className="form-container">
        <form action="" className="form">
          <h2>Crie sua conta</h2>
          <div className="input-container-login">
            <div className="div-form-container">
              <label className="label-name">Nome:</label>
              <input type="text" id="name" name="name" />
            </div>

            <div className="div-form-container">
              <label className="label-email">E-mail:</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="div-form-container">
              <label className="label-password">Senha:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="input"
              />
            </div>
          </div>

          <button type="submit" className="submit" id="buttonSubmit">Enviar</button>
        </form>
      </div>
    </HomeCriarConta>
    </main>
  )
}
