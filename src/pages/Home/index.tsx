import GoButton from "components/GoButton";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-card-top">
          <h1>Desafio Github API</h1>
          <h2>DevSuperior - Escola de Programação</h2>
        </div>
        <div className="home-card-bottom">
          <Link to="/search">
            <GoButton type="button" text="Começar"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
