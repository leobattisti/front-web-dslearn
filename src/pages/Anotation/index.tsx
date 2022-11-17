import AnotacaoCard from 'components/AnotacaoCard';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Anotacao } from 'types/anotacao';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/request';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './styles.css';

const Anotation = () => {
  const [page, setPage] = useState<SpringPage<Anotacao>>();

  useEffect(() => {
    const param: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/anotacoes`,
      params: {
        page: 0,
        size: 20
      },
    };

    axios(param).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Anotações</h1>
      </div>

      <div className="row">
        {page?.content.map((anotacao) => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={anotacao.id}>
            <Link to="/anotacoes/1">
              <AnotacaoCard anotacao={anotacao} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anotation;
