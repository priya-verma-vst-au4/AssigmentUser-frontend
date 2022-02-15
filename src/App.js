import './App.css';
import Nav from './components/Nav';
import AddUser from './components/AddUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">
     Test
     <BrowserRouter>
     <Nav />
     <Routes>
       <Route path="/" element={<UserList />} />
       <Route path="/add" element={<AddUser/>} />
       <Route path="/update/:id" element={<UpdateUser/>} />
       
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
