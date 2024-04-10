
import './App.css';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Loader from './components/Animation/Loader';

function App({ themeConfig, skillConfig, userData }) {
  return (
    <div className='App'>
      <Loader/>
      <Home themeConfig={themeConfig}
        skillConfig={skillConfig}
        userData={userData} />
      <Toaster />
    </div>
  );
}
export default App;
