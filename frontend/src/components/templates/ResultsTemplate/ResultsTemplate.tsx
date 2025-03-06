import { useParams } from 'react-router-dom';
import { useSingleTest } from '../../../hooks';
import { ErrorMsg, Loader, PageHeader } from '../../atoms';
import BtnBack from '../../molecules/BtnBack/BtnBack';
import style from '../templatesStyle.module.scss';

const ResultsTemplate = () => {
  const { id } = useParams();

  const { test, isLoading, error } = useSingleTest(Number(id));
  return (
    <div className={style.template}>
      <header className={style.header}>
        {test && (
          <div className={style.container}>
            <PageHeader header={'Results'} />
            <div className={style['header-bottom']}>{test.name}</div>
          </div>
        )}
      </header>
      <section className={style.main}>
        {(isLoading && <Loader />) ||
          (error && <ErrorMsg message={error.message} />)}
      </section>
      <footer className={style.footer}>
        <div className={style.container}>
          <BtnBack />
        </div>
      </footer>
    </div>
  );
};

export default ResultsTemplate;
