import { useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'util/request';
import axios from 'axios';
import { Alert, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import './styles.css';

const RegisterAnotacao = () => {
  const [inputs, setInputs] = useState({
    localizacao: '',
    titulo: '',
    usuario: '',
    ave: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const cadastrar = () => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: `${BASE_URL}/anotacoes`,
      data: {
        localizacao: inputs.localizacao,
        titulo: inputs.titulo,
        usuario: inputs.usuario,
        ave: inputs.ave,
      },
    };
    axios(params).then((response) => {
      alert('Anotação cadastrada com sucesso');
    });
  };
  return (
    <>
      <div className="div-externa">
        <div className="base-card div-form">
          <h1 className="titulo-card">Cadastrar Anotação</h1>
          <div className="div-form2">
            <Form onSubmit={cadastrar}>
              
              <Form.Group className="mb-3" controlId="formBasicLocalizacao">
                <h5>
                  <Form.Label>Localização</Form.Label>
                </h5>
                <Form.Control
                  value={inputs.localizacao}
                  name="localizacao"
                  placeholder="Localização"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTitulo">
                <h5>
                  <Form.Label>Titulo</Form.Label>
                </h5>
                <Form.Control
                  value={inputs.titulo}
                  name="titulo"
                  placeholder="Titulo"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUsuario">
                <h5>
                  <Form.Label>Usuario</Form.Label>
                </h5>
                <Form.Control
                  value={inputs.usuario}
                  name="usuario"
                  placeholder="Usuario"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicAve">
                <h5>
                  <Form.Label>Ave</Form.Label>
                </h5>
                <Form.Control
                  value={inputs.ave}
                  name="ave"
                  placeholder="Ave"
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
      </div>
    </>
  );
};

export default RegisterAnotacao;
