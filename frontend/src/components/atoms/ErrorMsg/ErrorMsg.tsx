import style from './ErrorMsg.module.scss';

interface IErrorMsgProps {
  message: string;
}

const ErrorMsg: React.FC<IErrorMsgProps> = ({ message }) => {
  return (
    <div className={style.error}>Whoops! Something gone wrong : {message}</div>
  );
};

export default ErrorMsg;
