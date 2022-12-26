import { useEffect, useState, useContext } from 'react';
import { Routes, Route } from 'react';

import DefaultLayout from './Layouts/DefaultLayout';
import AdminLayout from './Layouts/AdminLayout';

// import Login from './routes/Login/Login';
import { UserContext } from './Context/User.Context';
import Home from './Routes/Home/Home';

const App = () => {
  const [global, setGlobal] = useState(null);
  const { setCurrentUser } = useContext(UserContext);

  //   useEffect(() => {
  //     setCurrentUser(null);
  //     fetch('http://localhost:5000/pages/')
  //       .then((resp) => resp.json())
  //       .then((data) => setGlobal(data));
  //   }, []);

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
