import './App.css';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import SubMovies from './Components/SubMovies';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <SubMovies />
    </div>
  );
}

export default App;
