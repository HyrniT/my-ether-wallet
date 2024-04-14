import { Outlet } from 'react-router-dom';
import Header from '../header';
// import Footer from '../footer';

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default RootLayout;
