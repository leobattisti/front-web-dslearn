import { useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { baseUrl } from '../hooks/useApi';
import axios from 'axios';
import { Alert, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './styles.css';

const Register = () => {
  const [inputs, setInputs] = useState({
    nomePort: '',
    nomeIngle: '',
    nomeLatim: '',
    tam: '',
    cor: '',
    genero: '',
    familia: '',
    habitat: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const cadastrar = () => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: '/aves',
      baseURL: baseUrl,
      data: {
        nomPort: inputs.nomePort,
        nomIngl: inputs.nomeIngle,
        nomLat: inputs.nomeLatim,
        tam: inputs.tam,
        cor: inputs.cor,
        genero: inputs.genero,
        familia: inputs.familia,
        habitat: inputs.habitat,
      },
    };
    axios(params).then((response) => {
      alert('usuario criado com sucesso');
    });
  };
  return (
    <>
      <div className="div-form">
        <h1>Cadastrar nova ave</h1>
        <div className="div-form2">
          <Form onSubmit={cadastrar}>
            <Form.Group className="mb-3" controlId="formBasicNome">
              <h5>
                <Form.Label>Nome Português</Form.Label>
              </h5>
              <Form.Control
                name="nomePort"
                placeholder="Nome Portugues"
                value={inputs.nomePort}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h5>
                <Form.Label>Nome Inglês</Form.Label>
              </h5>
              <Form.Control
                value={inputs.nomeIngle}
                name="nomeIngle"
                placeholder="Nome ingles"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h5>
                <Form.Label>Nome Latim</Form.Label>
              </h5>
              <Form.Control
                value={inputs.nomeLatim}
                name="nomeLatim"
                placeholder="Nome Latim"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>
                <Form.Label>Tamanho</Form.Label>
              </h5>
              <Form.Control
                value={inputs.tam}
                name="tam"
                placeholder="Tamanho"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>
                <Form.Label>Cor</Form.Label>
              </h5>
              <Form.Control
                value={inputs.cor}
                name="cor"
                placeholder="cor"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>
                <Form.Label>Genero</Form.Label>
              </h5>
              <Form.Control
                value={inputs.genero}
                name="genero"
                placeholder="genero"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>
                <Form.Label>Familia</Form.Label>
              </h5>
              <Form.Control
                value={inputs.familia}
                name="familia"
                placeholder="familia"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>
                <Form.Label>Habitat</Form.Label>
              </h5>
              <Form.Control
                value={inputs.habitat}
                name="habitat"
                placeholder="habitat"
                onChange={handleChange}
              />
            </Form.Group>
            <div>
              <Button variant="primary" type="submit">
                Submit
              </Button>

              <button>Voltar</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
