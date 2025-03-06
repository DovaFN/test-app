import classNames from 'classnames';

import style from './TestStatus.module.scss';
import { normalizeCase } from '../../../utils/utils';

interface ITestsStatus {
  status: TTestStatuses;
}

const TestStatus: React.FC<ITestsStatus> = ({ status }) => {
  const className = classNames(style.status, style[status.toLowerCase()]);

  return <span className={className}>{normalizeCase(status)}</span>;
};

export default TestStatus;
