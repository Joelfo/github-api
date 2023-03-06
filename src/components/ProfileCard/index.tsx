import "./styles.css";
import joelImg from "assets/images/joel.jpg";
import GithubProfile from "types/githubProfile";

type Props = {
  profile : GithubProfile;
}

const ProfileCard = ({profile} : Props) => {
  return (
    <div className="card profile-card">
      <div className="card-content-left">
        <img src={profile.avatar_url} alt="Foto do perfil do Github" />
      </div>

      <div className="card-content-right card">
        <h3>Informações</h3>

        <ul className=" info-list">
          <li className=" info-list-item">
            <p className="info-title">Perfil: </p>
            <a href={profile.html_url} target="_blank" rel="noreferrer">{profile.html_url}</a>
          </li>
          <li className=" info-list-item">
            <p className="info-title">Seguidores:</p>
            <p>{profile.followers}</p>
          </li>
          <li className=" info-list-item">
            <p className="info-title">Localidade:</p>
            <p>{profile.location}</p>
          </li>
          <li className=" info-list-item">
            <p className="info-title">Nome:</p>
            <p>{profile.name}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
