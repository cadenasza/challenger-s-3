import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { HomeIntegrantes } from "../../style/styled";


export default function Integrantes() {
  return (
    <HomeIntegrantes>
        <main>
      <div className="main-header-container">
        <div className="text-container">
          <p id="p-integrantes">Conect</p>
          <p id="p-equipe">Car</p>
        </div>
        <div className="div-a-container">
        <Link to={"/"}className="a-link"><IoMdArrowRoundBack className="arrow-left" /><p className="p-back">Voltar</p></Link>
        </div>
      </div>

      <section className="cards">
        <div className="card-container">
          <h1>Leonardo Cadena de Souza</h1>
          <img
            src="../../../public/img/leocadena.jpg"
            alt="leo-cadena"
            className="img-people"
          />
          <div className="rm-turma">
            <p className="text-rm-turma" id="rm">RM: 557528</p>
            <p className="text-rm-turma" id="turma">1TDSPF</p>
          </div>
          <button type="submit" className="submit" id="submitLeoCadena">
            GITHUB
          </button>
        </div>
        <div className="card-container">
          <h1>Leonardo Barbosa Santos</h1>
          <img
            src="../../../public/img/leobarbosa.jpg"
            alt="leo-barbosa"
            className="img-people"
          />
          <div className="rm-turma">
            <p className="text-rm-turma" id="rm">RM: 558230</p>
            <p className="text-rm-turma" id="turma">1TDSPF</p>
          </div>
          <div className="button-leo-container">
            <button type="submit" className="submit" id="submitLeoBarbosa">
              GITHUB
            </button>
            <button type="submit" className="submit" id="repository">
              REPOSITÓRIO
            </button>
          </div>
        </div>
        <div className="card-container">
          <h1>Julia Vasconcelos</h1>
          <img
            src="../../../public/img/juliavasco.jpg"
            alt="julia-vasco"
            className="img-people"
          />
          <div className="rm-turma">
            <p className="text-rm-turma" id="rm">RM: 558785</p>
            <p className="text-rm-turma" id="turma">1TDSPF</p>
          </div>
          <button type="submit" className="submit" id="submitJulia">GITHUB</button>
        </div>
      </section>
    </main>
    </HomeIntegrantes>
  )
}
