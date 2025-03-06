declare type TSortOrder = 'asc' | 'desc';

declare type TSortBy = Exclude<keyof ITest, 'id' | 'siteId'>;

declare type TTestTypes = 'MVT' | 'Server-side' | 'Classic';

declare type TTestStatuses = 'Draft' | 'Online' | 'Paused' | 'Stopped';

declare interface ITest {
  id: number;
  name: string;
  type: TTestTypes;
  status: TTestStatuses;
  site: string;
}
