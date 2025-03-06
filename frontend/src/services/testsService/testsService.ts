import axios from 'axios';
import { prepareTests } from '../../utils/utils';
import { APISite } from './typesApi';

const API_URL = 'http://localhost:3100';

interface ITestService {
  getSites: () => Promise<APISite[]>;
  getTests: () => Promise<ITest[]>;
  getSingleTest: (id: number) => Promise<ITest>;
}

const testsService: ITestService = {
  getSites: async function () {
    try {
      const { data } = await axios.get(`${API_URL}/sites`);
      return data;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  },
  getTests: async function () {
    try {
      const { data } = await axios.get(`${API_URL}/tests`);

      const sites = await this.getSites();
      const preparedData = prepareTests(data, sites);

      return preparedData;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  },
  getSingleTest: async function (id: number) {
    try {
      const { data } = await axios.get(`${API_URL}/tests/${id}`);
      return data;
    } catch (err) {
      throw new Error((err as Error).message);
    }
  },
};

export default testsService;
