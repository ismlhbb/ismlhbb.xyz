import type { NextPage } from 'next';

import About from 'components/sections/About';
import Introduction from 'components/sections/Introduction';
import HomeLayout from 'layouts/home/HomeLayout';

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Introduction />
      <About />
    </HomeLayout>
  );
};

export default Home;
