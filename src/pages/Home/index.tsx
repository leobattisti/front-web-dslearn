import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const textLogin = "LOGIN";
const textRegistrar = "REGISTRAR";

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça o melhor catálago de pássaros</h1>
            <p>
              Ajudaremos os ornitologos amadores a registrarem seus momentos de
              observção.
            </p>
          </div>
          <Link to="/aves">
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