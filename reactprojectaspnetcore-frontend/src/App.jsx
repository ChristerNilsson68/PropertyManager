import { Routes, Route } from 'react-router-dom';

import DefaultLayout from './Layouts/DefaultLayout';
import ErrorPage from './Routes/ErrorPage/ErrorPage';
import ErrorReporting from './Routes/ErrorReporting/ErrorReporting';

import Home from './Routes/Home/Home';
import Person from './Routes/Person/Person';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/person" element={<Person />} />
          <Route path="/ErrorReporting" element={<ErrorReporting />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
