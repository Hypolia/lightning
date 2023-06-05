import Header from './components/header';
import Navbar from './components/navbar/navbar';

import './styles.scss'

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <>
      <div className="text-gray-700">
        <Navbar />

        <div className="content">
          <Header />
        </div>
      </div>
    
    </>
  );
}
