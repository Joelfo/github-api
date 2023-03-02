import "./styles.css";
import joelImg from "assets/images/joel.jpg";

const ProfileCard = () => {
  return (
    <div className="card profile-card">
      <div className="card-content-left">
        <img src={joelImg} alt="Foto do perfil do Github"/>
      </div>

      <div className="card-content-right">
        <h3></h3>
        <div></div>
      </div>
    </div>
  );
};

export default ProfileCard;
