import style from './TestHead.module.scss';

interface ITestHeadProps {
  label: string;
  onClick: () => void;
}

const TestHead: React.FC<ITestHeadProps> = ({ label, onClick }) => {
  return (
    <span onClick={onClick} className={style.testHead}>
      {label.toUpperCase()}
    </span>
  );
};

export default TestHead;
