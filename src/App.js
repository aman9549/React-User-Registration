import logo from './logo.svg';
import './App.css';
import ListOfUsers from './components/ListOfUsers/ListOfUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './components/Resgistation/Registration';
import UpdateList from './components/ListOfUsers/UpdateList';
import ReadList from './components/ListOfUsers/ReadList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ListOfUsers />} />
      <Route path='/update/:id' element={<UpdateList />} />
      <Route path='/create' element={<Registration />} />
      <Route path='/read/:id' element={<ReadList />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
