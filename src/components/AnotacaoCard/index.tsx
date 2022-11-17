import './styles.css';

import ProductPrice from 'components/ProductPrice';
import { Anotacao } from 'types/anotacao';

type Props = {
  anotacao: Anotacao;
};

const AnotacaoCard = ({ anotacao }: Props) => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <h4>{anotacao.ave.nomPort}</h4>
      </div>
      <div className="card-bottom-container">
        <div className="div-text">
          <h6 className="descricao">Latim:</h6>
          <h5>{anotacao.ave.nomLat}</h5>
        </div>
        <div className="div-text">
          <h6 className="descricao">Ingles:</h6> <h5>{anotacao.ave.nomIngl}</h5>
        </div>
        <div className="div-text">
          <h6 className="descricao">Família:</h6>{' '}
          <h5>{anotacao.ave.familia}</h5>
        </div>
        <div className="div-text">
          <h6 className="descricao">Habitat:</h6>{' '}
          <h5>{anotacao.ave.habitat}</h5>
        </div>
      </div>
    </div>
  );
};

export default AnotacaoCard;
