import { useEffect, useState, useContext } from 'react';
import { Routes, Route } from 'react';

import DefaultLayout from './Layouts/DefaultLayout';
import AdminLayout from './Layouts/AdminLayout';

// import Login from './routes/Login/Login';
import { UserContext } from './Context/User.Context';
import Home from './Routes/Home/Home';

const App = () => {
  const [global, setGlobal] = useState(null);
  const { setToken } = useContext(UserContext);

  useEffect(() => {
    setToken(null);
  }, []);

  return (
    <div className="App">
      <DefaultLayout />

      {/* <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes> */}
    </div>
  );
};

export default App;
