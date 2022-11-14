import ProductCard from 'components/ProductCard';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Product } from 'types/product';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL } from 'util/request';
import axios from 'axios'

const Catalog = () => {

  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    
    const param : AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12
      }
    }

    axios(param).then(response => {
      setPage(response.data);
      console.log(page);
    });

  }, [])

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <p>Nada</p>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <p>Nada</p>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <p>Nada</p>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <p>Nada</p>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
        <p>Nada</p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
