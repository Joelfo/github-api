import "./styles.css";
import joelImg from "assets/images/joel.jpg";

type Props = {
  image : string;
  url : string;
  numFollowers: number;
  place : string;
  name: string;
}

const ProfileCard = () => {
  return (
    <div className="card profile-card">
      <div className="card-content-left">
        <img src={joelImg} alt="Foto do perfil do Github" />
      </div>

      <div className="card-content-right card">
        <h3>Informações</h3>

        <ul className=" info-list">
          <li className=" info-list-item">
            <p className="info-title">Perfil: </p>
            <a href="https://github.com/Joelfo" target="_blank" rel="noreferrer">https://github.com/Joelfo</a>
          </li>
          <li className=" info-list-item">
            <p className="info-title">Seguidores:</p>
            <p>1000000</p>
          </li>
          <li className=" info-list-item">
            <p className="info-title">Localidade:</p>
            <p>Niterói</p>
          </li>
          <li className=" info-list-item">
            <p className="info-title">Nome:</p>
            <p>Joel Lopes</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
