import classNames from 'classnames';

import style from './Button.module.scss';
import { BUTTON_TEXTS } from '../../../constants/constants';

interface IButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ label, onClick }) => {
  const btnClass = classNames(style.button, {
    [style.primary]:
      label === BUTTON_TEXTS.RESET || label === BUTTON_TEXTS.RESULTS,
    [style.secondary]: label === BUTTON_TEXTS.FINALIZE,
  });

  return (
    <button onClick={onClick} className={btnClass}>
      {label}
    </button>
  );
};

export default Button;
