import style from './SearchInput.module.scss';

export interface ISearchInputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  placeholder,
  onChange,
  value,
}) => {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchInput;
