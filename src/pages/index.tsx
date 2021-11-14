import type { NextPage } from 'next';

import About from 'components/sections/About';
import Experience from 'components/sections/Experience';
import Introduction from 'components/sections/Introduction';
import HomeLayout from 'layouts/home/HomeLayout';

const Home: NextPage = () => {
  return (
    <>
      <HomeLayout>
        <Introduction />
        <About />
        <Experience />
      </HomeLayout>
    </>
  );
};

export default Home;
