import Layout from '@/components/layout/Layout';
import { NextPage } from 'next';
import Image from 'next/image';

interface Props {}

const NotFound: NextPage<Props> = ({}) => {
  return (
    <Layout title='404' description='404'>
      <div>
        404
        <Image priority src={'/404.png'} alt='404' width='800' height='700' />
      </div>
    </Layout>
  );
};

export default NotFound;
