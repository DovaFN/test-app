export enum APITestType {
  CLASSIC = 'CLASSIC',
  SERVER_SIDE = 'SERVER_SIDE',
  MVT = 'MVT',
}

export enum APITestStatus {
  DRAFT = 'DRAFT',
  ONLINE = 'ONLINE',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED',
}

export interface APISite {
  id: number;
  url: string;
}

export interface APITest {
  id: number;
  name: string;
  type: APITestType;
  status: APITestStatus;
  siteId: number;
}
