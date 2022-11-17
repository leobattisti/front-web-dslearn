import { Ave } from 'types/ave';

import './styles.css';

type Props = {
  ave: Ave;
};

const AnotacaoCard = ({ ave }: Props) => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <h4>{ave.nomPort}</h4>
      </div>
      <div className="card-bottom-container">
        <div className="div-text">
          <h6 className="descricao">Nome Latim:</h6>
          <h5>{ave.nomLat}</h5>
        </div>
        <div className="div-text">
          <h6 className="descricao">Nome Ingles:</h6>
          <h5>{ave.nomIngl}</h5>
        </div>
      <div className="div-text">
          <h6 className="descricao">Familia:</h6>
          <h5>{ave.familia}</h5>
        </div>
        <div className="div-text">
          <h6 className="descricao">Habitat:</h6>
          <h5>{ave.habitat}</h5>
        </div>
      </div>
    </div>
  );
};

export default AnotacaoCard;
