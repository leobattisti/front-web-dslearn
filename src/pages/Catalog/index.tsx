import AnotacaoCard from 'components/AnotacaoCard';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Ave } from 'types/ave';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/request';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './styles.css';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Ave>>();

  useEffect(() => {
    const param: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/aves`,
      params: {
        page: 0,
        size: 20,
      },
    };

    axios(param).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálogo de aves</h1>
      </div>

      <div className="row">
        {page?.content.map((ave) => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={ave.id}>
            <Link to="/aves/1">
              <AnotacaoCard ave={ave} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
