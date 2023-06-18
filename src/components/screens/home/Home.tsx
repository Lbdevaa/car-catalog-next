import { FC } from 'react';
import Image from 'next/image';
import styles from './Home.module.scss';
import Layout from '@/components/layout/Layout';
import { ICarData } from '@/interfaces/car.interface';
import CarItem from '@/components/ui/car/CarItem';

const Home: FC<ICarData> = ({ cars }) => {
  return (
    <Layout title='Home' description='Sale cars'>
      <main className={`${styles.main}`}>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>Cars not found</p>
        )}
      </main>
    </Layout>
  );
};

export default Home;
