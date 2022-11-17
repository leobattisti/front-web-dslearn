import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const textLogin = "REGISTRAR";

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Catálogo de pássaros Canarinho</h1>
            <p>
              Ajudaremos os ornitologos amadores a registrarem seus momentos de
              observção.
            </p>
          </div>
          <Link to="/register">
            <ButtonIcon textoBtn={textLogin} />
          </Link>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;