import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRouter from './routes/AppRouter';

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
