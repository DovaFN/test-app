import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import style from './TestRow.module.scss';

import TestStatus from '../../atoms/TestStatus/TestStatus';
import { getBtnLabel, getRowClass } from './TestRow.utils';

const TestRow: React.FC<ITest> = ({ name, id, type, status, site }) => {
  const label = getBtnLabel(status);

  const rowClass = getRowClass(site, style);

  return (
    <tr className={rowClass}>
      <td>
        <span>{name}</span>
      </td>
      <td>
        <span>{type}</span>
      </td>
      <td>
        <TestStatus status={status} />
      </td>
      <td>
        <span>{site}</span>
      </td>
      <td>
        <Link to={`${label.toLowerCase()}/${id}`}>
          <Button label={label} onClick={() => {}} />
        </Link>
      </td>
    </tr>
  );
};

export default TestRow;
