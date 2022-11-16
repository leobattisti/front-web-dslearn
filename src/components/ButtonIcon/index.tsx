import './styles.css';

type Props = {
  textoBtn: string;
}

const ButtonIcon = ( { textoBtn } : Props) => {
  return (
    <button className="btn btn-primary btn-icon">
      <h6>{textoBtn}</h6>
    </button>
  );
};

export default ButtonIcon;
