import { HomeEntrarConta } from "../../style/styled";

export default function EntrarConta() {
  return (
    <main>
        <HomeEntrarConta>
        <div className="form-container">
        <form action="" className="form">
          <h2>Entre na sua conta</h2>
          <div className="input-container-login">
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
              <div className="select-account">
                <a href="./forgot.html">
                  <p className="p-create-account">Esqueci minha senha</p>
                </a>
                <div className="div-label-input-container">
                  <div className="label-input-container">
                    <input
                      type="radio"
                      id="mecanico"
                      name="profissao"
                      value="mecanico"
                      className="input-ball"
                    />
                    <label>Mecânico</label>
                  </div>
                  <div className="label-input-container">
                    <input
                      type="radio"
                      id="cliente"
                      name="profissao"
                      value="cliente"
                      className="input-ball"
                    />
                    <label>Cliente</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="submit" id="buttonSend">Enviar</button>
        </form>
      </div>
      <div className="cadastro-container">
        <h1>Cadastre-se e conheça a nossa plataforma</h1>
        <div className="no-account-container">
          <p>Não tem uma conta?</p>
          <a href="../CriarConta">
            <p className="p-create-account">Criar uma Conta</p></a>
        </div>
      </div>
      </HomeEntrarConta>
    </main>
  )
};
