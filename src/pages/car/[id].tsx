import { NextPage } from 'next';
import { useRouter } from 'next/router';

const CarPage: NextPage = ({}) => {
  const { asPath, pathname } = useRouter();
  return <div>car</div>;
};

export default CarPage;
