import { TableHeader, TestRow } from '../../molecules';
import style from './TestTable.module.scss';

interface ITestTableProps {
  tests: ITest[];
  sortBy: TSortBy;
  sortOrder: TSortOrder;
  handleSort: (column: TSortBy) => void;
}

const TestTable: React.FC<ITestTableProps> = ({
  tests,
  sortBy,
  sortOrder,
  handleSort,
}) => {
  return (
    <table className={style.table}>
      <TableHeader
        sortBy={sortBy}
        sortOrder={sortOrder}
        handleSort={handleSort}
      />
      <tbody>
        {tests.map((test) => (
          <TestRow key={test.id} {...test} />
        ))}
      </tbody>
    </table>
  );
};

export default TestTable;
