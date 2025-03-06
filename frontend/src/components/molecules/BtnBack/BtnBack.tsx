import { useNavigate } from 'react-router-dom';
import style from './BtnBack.module.scss';
import arrow from '../../../assets/Arrow-left.svg';

const BtnBack = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBack} className={style.backButton}>
      <img src={arrow} alt="" />
      <span>Back</span>
    </button>
  );
};

export default BtnBack;
