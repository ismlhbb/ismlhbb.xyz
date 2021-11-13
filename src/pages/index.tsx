import type { NextPage } from 'next';

import SidebarNav from 'components/sidenav/SidebarNav';
import HomeLayout from 'layouts/home/HomeLayout';

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <div className='flex flex-row items-center min-h-screen'>
        <h1 className='text-on-primary'>hi, Ismail here</h1>
      </div>
      <SidebarNav />
    </HomeLayout>
  );
};

export default Home;
