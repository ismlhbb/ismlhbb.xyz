import * as React from 'react';

import SidebarNav from 'components/sidenav/SidebarNav';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <section className='bg-primary'>
        <div className='layout'>{children}</div>
        <SidebarNav />
      </section>
    </main>
  );
};

export default HomeLayout;
