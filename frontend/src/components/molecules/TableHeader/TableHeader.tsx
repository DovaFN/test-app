import SortIcon from '../../atoms/SortIcon/SortIcon';
import TestHead from '../../atoms/TestHead/TestHead';
import style from './TableHeader.module.scss';

const TABLE_HEADERS: TSortBy[] = ['name', 'type', 'status', 'site'];

interface ITableHeaderProps {
  sortBy: TSortBy;
  sortOrder: TSortOrder;
  handleSort: (a: TSortBy) => void;
}

const TableHeader: React.FC<ITableHeaderProps> = ({
  sortBy,
  sortOrder,
  handleSort,
}) => {
  return (
    <thead>
      <tr className={style.row}>
        {TABLE_HEADERS.map((item) => (
          <th key={item}>
            <TestHead label={item} onClick={() => handleSort(item)} />
            {sortBy === item && (
              <SortIcon
                onClick={() => handleSort(item)}
                sortOrder={sortOrder}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
