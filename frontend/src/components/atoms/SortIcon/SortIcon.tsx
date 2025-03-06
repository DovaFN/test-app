import classNames from 'classnames';

import arrow from '../../../assets/Vector.svg';
import style from './SortIcon.module.scss';

interface ISortIconProps {
  sortOrder: TSortOrder;
  onClick: () => void;
}

const SortIcon: React.FC<ISortIconProps> = ({ sortOrder, onClick }) => {
  const className = classNames(style.container, style[sortOrder]);
  return (
    <span onClick={onClick}>
      <img src={arrow} alt="" className={className} />
    </span>
  );
};

export default SortIcon;
