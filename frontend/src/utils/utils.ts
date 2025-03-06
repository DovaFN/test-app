import {
  TEST_STATUSES,
  TEST_TYPES,
  DOMAIN_REGEX,
} from '../constants/constants';
import { APISite, APITest } from '../services/testsService/typesApi';

const matchRegex = (str: string, regex: RegExp, idx: number) => {
  const match = str.match(regex);

  return match ? match[idx] : '';
};

const prepareTests: (a: APITest[], b: APISite[]) => ITest[] = (
  tests,
  sites,
) => {
  const domains: { [key: string]: string } = sites.reduce(
    (acc, site) => {
      acc[site.id] = matchRegex(site.url, DOMAIN_REGEX, 1);
      return acc;
    },
    {} as { [key: string]: string },
  );

  return tests.map((test) => ({
    ...test,
    site: domains[test.siteId],
    status: TEST_STATUSES[test.status],
    type: TEST_TYPES[test.type],
  }));
};

const normalizeCase = (str: string) => {
  if (!str) return '';
  return str.charAt(0) + str.slice(1).toLowerCase();
};

export { matchRegex, prepareTests, normalizeCase };
