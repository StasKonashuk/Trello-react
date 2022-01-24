import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import BoardPage from './Content/BoardPage/BoardPage';
import Header from './Header/Header';
import MainPage from './Content/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/trello-react" element={<Navigate to="/" />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/board/:id" element={<BoardPage />} />
      </Routes>
    </div>
  );
}

export default App;
