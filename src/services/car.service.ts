import { ICar } from '@/interfaces/car.interface';
import axios from 'axios';

const API_URL = process.env.API_URL;
axios.defaults.baseURL = API_URL;

export const CarService = {
  async getAll() {
    const { data } = await axios.get<ICar[]>('/cars');
    return data;
  },
  async getById(id: string) {
    const { data } = await axios.get<ICar[]>('/cars', {
      params: {
        id,
      },
    });
    return data[0];
  },
};
