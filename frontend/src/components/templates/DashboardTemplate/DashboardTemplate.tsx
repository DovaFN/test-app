import { useMemo, useState } from 'react';
import { SearchBar } from '../../molecules';
import TestTable from '../../organisms/TestTable/TestTable';
import style from '../templatesStyle.module.scss';
import { useTests, useDebounce, useSortedData } from '../../../hooks';
import { Loader, ErrorMsg, PageHeader, Button } from '../../atoms';
import { MSG_NO_RESULTS } from '../../../constants/constants';

const DashboardTemplate = () => {
  const { tests, isLoading, error } = useTests();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [sortBy, setSortBy] = useState<TSortBy>('type');
  const [sortOrder, setSortOrder] = useState<TSortOrder>('asc');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const filteredTests = useMemo(() => {
    if (!tests) return [];
    return tests.filter((item) =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );
  }, [debouncedSearchTerm, tests]);

  const sortedTests = useSortedData(
    filteredTests,
    sortBy as keyof ITest,
    sortOrder,
  );

  const handleSort = (column: TSortBy) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
    <div className={style.template}>
      <header className={style.header}>
        <div className={style.container}>
          <PageHeader header={'Dashboard'} />
        </div>
      </header>
      <main>
        <section className={style.search}>
          <div className={style.container}>
            <SearchBar
              placeholder={'What test are you looking for?'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              count={sortedTests.length}
            />
          </div>
        </section>
        <section className={style.table}>
          <div className={style.container}>
            {(isLoading && <Loader />) ||
              (error && <ErrorMsg message={error.message} />) ||
              (sortedTests && sortedTests.length && (
                <TestTable
                  tests={sortedTests}
                  handleSort={handleSort}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                />
              )) || (
                <div className={style.noResults}>
                  <div>{MSG_NO_RESULTS}</div>
                  <Button label={'Reset'} onClick={() => setSearchTerm('')} />
                </div>
              )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardTemplate;
