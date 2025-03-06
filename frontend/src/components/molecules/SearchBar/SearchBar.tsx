import SearchInput from '../../atoms/SearchInput/SearchInput';

import style from './SearchBar.module.scss';
import searchIcon from '../../../assets/searchIcon.svg';

import { ISearchInputProps } from '../../atoms/SearchInput/SearchInput';

interface TSearchBarProps extends ISearchInputProps {
  count: number;
}

const SearchBar: React.FC<TSearchBarProps> = ({
  placeholder,
  onChange,
  value,
  count,
}) => {
  return (
    <div className={style.container}>
      <span>
        <img src={searchIcon} alt="" />
      </span>
      <SearchInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <span className={style.counter}>{count} tests</span>;
    </div>
  );
};

export default SearchBar;
