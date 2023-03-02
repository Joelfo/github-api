import GoButton from 'components/GoButton';
import ProfileCard from 'components/ProfileCard';
import './styles.css';

const Search = () => {
    return(<div className='search-page-container'>
        <div className="search-box-container bg-secondary">
            <div className="search-box">
                <form>
                    <label htmlFor="profile-name-input" className="form-label"><h3>Encontre um Perfil Github</h3></label>
                    <div className="profile-input-container">
                    <input type="text" className="form-control" id="profile-name-input" placeholder="Usuário Github"/>
                    </div>
                    <GoButton type="submit" text="Encontrar"/>
                </form>
            </div>
        </div>
        <div className="profile-card-container">
            <ProfileCard/>
        </div>
    </div>);
}

export default Search;