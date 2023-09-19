// react-router-dom
import { Routes, Route } from 'react-router-dom';
import UserTemplate from './template/User/UserTemplate';
import Home from './page/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
