export const TEST_TYPES = {
  CLASSIC: 'Classic',
  MVT: 'MVT',
  SERVER_SIDE: 'Server-side',
} as const;

export const TEST_STATUSES = {
  DRAFT: 'Draft',
  ONLINE: 'Online',
  PAUSED: 'Paused',
  STOPPED: 'Stopped',
} as const;

export const BUTTON_TEXTS = {
  RESULTS: 'Results',
  FINALIZE: 'Finalize',
  RESET: 'Reset',
} as const;

export const STATUS_ORDER = {
  asc: ['Online', 'Paused', 'Stopped', 'Draft'],
  desc: ['Draft', 'Stopped', 'Paused', 'Online'],
};

export const sortOrder: { [key: string]: TSortOrder } = {
  ASC: 'asc',
  DESC: 'desc',
};

export const DOMAIN_REGEX = /(?:https?:\/\/)?(?:www\.)?([^/]+)/;

export const FIRST_WORD_REGEX = /^[^.]+/;

export const MSG_NO_RESULTS = 'Your search did not match any results.';
