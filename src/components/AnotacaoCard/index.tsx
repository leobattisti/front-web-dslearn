import './styles.css';

import ProductPrice from 'components/ProductPrice';
import { Ave } from 'types/ave';

type Props = {
     ave: Ave;
}

const AnotacaoCard = ( { ave } : Props) => {

     return (
          <div className="base-card product-card">
               <div className="card-top-container">
                    <h1>{ave.id} - {ave.nomPort}</h1>
               </div>
               <div className="card-bottom-container">
                    <h6>{ave.nomIngl}</h6>
               </div>
          </div>
     );
}

export default AnotacaoCard;