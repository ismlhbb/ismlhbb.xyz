import type { NextPage } from 'next';

import Introduction from 'components/sections/Introduction';
import HomeLayout from 'layouts/home/HomeLayout';

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Introduction />
    </HomeLayout>
  );
};

export default Home;
