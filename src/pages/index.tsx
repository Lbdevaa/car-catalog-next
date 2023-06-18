import Home from '@/components/screens/home/Home';
import { ICarData } from '@/interfaces/car.interface';
import { CarService } from '@/services/car.service';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<ICarData> = ({ cars }) => {
  return <Home cars={cars} />;
};

// export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
//   const cars = await CarService.getAll();
//   return {
//     props: { cars },
//   };
// };

// для продакшн режима используется StaticProps, чтобы избежать нагрузки и указать частоту обновления кэш данных
export const getStaticProps: GetStaticProps<ICarData> = async () => {
  const cars = await CarService.getAll();
  return {
    props: { cars },
    revalidate: 60,
    // notFound: false
  };
};

export default HomePage;
