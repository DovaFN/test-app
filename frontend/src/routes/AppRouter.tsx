import { Routes, Route } from 'react-router-dom';
import { DashboardPage, FinalizePage, ResultsPage } from '../pages';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/finalize/:id" element={<FinalizePage />} />
      <Route path="/results/:id" element={<ResultsPage />} />
    </Routes>
  );
};

export default AppRouter;
