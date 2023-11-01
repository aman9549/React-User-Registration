
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
      <Route path='/' element={<Registration />} />
      <Route path='/update/:userId' element={<UpdateList />} />
      <Route path='/users' element={<ListOfUsers/>} />
      <Route path='/read/:userId' element={<ReadList />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
