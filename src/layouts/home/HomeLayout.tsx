import * as React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>
        <section className='app'>
          <div className='layout'>{children}</div>
        </section>
      </main>
    </>
  );
};

export default HomeLayout;
