import { FC, PropsWithChildren } from 'react';
import Header from './header/Header';

import { Titillium_Web } from 'next/font/google';
import Meta from '../seo/Meta';
import { IMeta } from '../seo/meta.interface';

const titillium = Titillium_Web({
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--titillium',
});

const Layout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <Meta title={title} description={description}>
      <div className={titillium.className}>
        <Header />
        <main>{children}</main>
      </div>
    </Meta>
  );
};

export default Layout;
