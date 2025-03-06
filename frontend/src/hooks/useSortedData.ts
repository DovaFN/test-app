import { useMemo } from 'react';
import { STATUS_ORDER } from '../constants/constants';

const useSortedData: (
  data: ITest[],
  sortBy: keyof ITest,
  sortOrder: TSortOrder,
) => ITest[] = (data, sortBy, sortOrder) => {
  const sortedData = useMemo(() => {
    if (!sortBy) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortBy]?.toString().toLowerCase() ?? '';
      const bValue = b[sortBy]?.toString().toLowerCase() ?? '';

      if (sortBy === 'status') {
        const statusOrder = STATUS_ORDER[sortOrder];
        return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortBy, sortOrder]);

  return sortedData;
};

export default useSortedData;
