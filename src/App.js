import './App.css';
import { useState } from 'react'
import MainHeader from './components/MainHeader';
import Nav from './components/Nav';
import MainDisplay from './components/MainDisplay';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [ category, setCategory ] = useState('All')

  return (
    <BrowserRouter>
      <div className="App">
        <MainHeader />
        <Nav setCategory={setCategory}/>
        <Routes>
          <Route path="/" element={<MainDisplay category={category}/>} />
          <Route path="/:review_id" element={<MainDisplay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
