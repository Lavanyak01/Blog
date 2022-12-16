import TopBar from "./components/topbar/topBar.jsx";
import Home from "./pages/Home/home.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import Settings from "./pages/settings/settings.jsx";
import Single from "./pages/single/single.jsx";
import Write from "./pages/write/write.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context.js";




function App() {
  const { user} = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route path='/register' element={user ? <Home /> : <Register />}></Route>
        <Route path='/login' element={user ? <Home /> : < Login />}></Route>
        <Route path='/write' element={user ? < Write /> : <Register />}></Route>
        <Route path='/settings' element={user ? < Settings /> : <Register />}></Route>
        <Route path='/post/:postId' element={< Single />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
