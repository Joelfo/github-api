import axios from "axios";
import GoButton from "components/GoButton";
import ProfileCard from "components/ProfileCard";
import { useEffect, useState } from "react";
import GithubProfile from "types/githubProfile";
import "./styles.css";

const Search = () => {
  type FormData = {
    userName: string;
  };

  const [formData, setFormData] = useState<FormData>({
    userName: "",
  });

  const [profile, setProfile] = useState<GithubProfile>();
  
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.userName}`)
      .then((response) => {
        setProfile(response.data);
      }).catch((error) => {
        setProfile(undefined);
        console.log(error);
      })
  };

  return (
    <div className="search-page-container">
      <div className="search-box-container bg-secondary">
        <div className="search-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="profile-name-input" className="form-label">
              <h3>Encontre um Perfil Github</h3>
            </label>
            <div className="profile-input-container">
              <input
                type="text"
                className="form-control"
                name="userName"
                value={formData.userName}
                id="profile-name-input"
                placeholder="Usuário Github"
                onChange={handleChange}
              />
            </div>
            <GoButton type="submit" text="Encontrar" />
          </form>
        </div>
      </div>
      <div className="profile-card-container">
        {profile && <ProfileCard profile={profile} />}
      </div>
    </div>
  );
};

export default Search;
