import CarDetail from '@/components/screens/car-detail/CarDetail';
import Home from '@/components/screens/home/Home';
import { ICarData, ICarDataSingle } from '@/interfaces/car.interface';
import { CarService } from '@/services/car.service';
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

const CarDetailPage: NextPage<ICarDataSingle> = ({ car }) => {
  return <CarDetail car={car} />;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const cars = await CarService.getAll();

  return {
    paths: cars.map((car) => ({
      params: {
        id: car.id.toString(),
      },
    })),
    fallback: 'blocking', // если страницы не существует, сделает запрос на сервер и проверит ее существование
  };
};

// export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
//   const cars = await CarService.getAll();
//   return {
//     props: { cars },
//   };
// };

// для продакшн режима используется StaticProps, чтобы избежать нагрузки и указать частоту обновления кэш данных
export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({
  params,
}) => {
  const car = await CarService.getById(String(params?.id));
  return {
    props: { car },
    revalidate: 60,
    // notFound: false
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export default CarDetailPage;
