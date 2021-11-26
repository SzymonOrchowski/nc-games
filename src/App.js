import './App.css';
import { useState, useEffect } from 'react'
import MainHeader from './components/MainHeader';
import Nav from './components/Nav';
import MainDisplay from './components/MainDisplay';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { getCategories } from './utils/api';

function App() {
  const [categories, setCategories] = useState([])
  const [category, setCategory ] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
      setIsLoading(true)
      getCategories().then((categoriesFromServer) =>{
          setCategories(categoriesFromServer)
          setIsLoading(false)
      })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <MainHeader />
        <Nav categories={categories} setCategory={setCategory} isLoading={isLoading}/>
        <Routes>
          <Route path="/" element={<MainDisplay category={category}/>} />
          <Route path="/category/:category" element={<MainDisplay category={category}/>} />
          <Route path="/:review_id" element={<MainDisplay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
