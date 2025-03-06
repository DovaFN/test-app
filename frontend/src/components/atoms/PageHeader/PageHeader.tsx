import style from './PageHeader.module.scss';

const PageHeader = ({ header }: { header: string }) => {
  return <h1 className={style.header}>{header}</h1>;
};

export default PageHeader;
