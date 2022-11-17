import { useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'util/request';
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
      url: `${BASE_URL}/aves`,
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
      alert('Ave cadastrada com sucesso');
    });
  };
  return (
    <>
      <div className="div-externa">
        <div className="base-card div-form">
          <h1 className="titulo-card">Cadastrar Ave</h1>
          <div className="div-form2">
            <Form onSubmit={cadastrar}>
              <Form.Group className="mb-3" controlId="formBasicPortugues">
                <h5>
                  <Form.Label>Nome Português</Form.Label>
                </h5>
                <Form.Control
                  name="nomePort"
                  placeholder="Nome português"
                  value={inputs.nomePort}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicIngles">
                <h5>
                  <Form.Label>Nome Inglês</Form.Label>
                </h5>
                <Form.Control
                  value={inputs.nomeIngle}
                  name="nomeIngle"
                  placeholder="Nome inglês"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLatim">
                <h5>
                  <Form.Label>Nome Latim</Form.Label>
                </h5>
                <Form.Control
                  value={inputs.nomeLatim}
                  name="nomeLatim"
                  placeholder="Nome latim"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLabel">
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
              <Form.Group className="mb-3" controlId="formBasicCor">
                <h5>
                  <Form.Label>Cor</Form.Label>
                </h5>
                <Form.Control
                  value={inputs.cor}
                  name="cor"
                  placeholder="Cor"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicGenero">
                <h5>
                  <Form.Label>Genero</Form.Label>
                </h5>
                <Form.Control
                  value={inputs.genero}
                  name="genero"
                  placeholder="Gênero"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasiFamilia">
                <h5>
                  <Form.Label>Familia</Form.Label>
                </h5>
                <Form.Control
                  value={inputs.familia}
                  name="família"
                  placeholder="Familia"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicHabitat">
                <h5>
                  <Form.Label>Habitat</Form.Label>
                </h5>
                <Form.Control
                  value={inputs.habitat}
                  name="habitat"
                  placeholder="Habitat"
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="div-botoes">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button variant="primary" className="btn-voltar">
                Voltar
                </Button>
               
                
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
