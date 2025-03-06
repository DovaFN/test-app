import {
  BUTTON_TEXTS,
  FIRST_WORD_REGEX,
  TEST_STATUSES,
} from '../../../constants/constants';
import { matchRegex } from '../../../utils/utils';

export const getRowClass = (site: string, style: Record<string, string>) => {
  const siteClass = matchRegex(site, FIRST_WORD_REGEX, 0);
  return [style.row, style[siteClass]].join(' ');
};

export const getBtnLabel = (status: string) => {
  return status === TEST_STATUSES.DRAFT
    ? BUTTON_TEXTS.FINALIZE
    : BUTTON_TEXTS.RESULTS;
};
