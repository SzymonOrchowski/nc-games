import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { getCategories } from './utils/api';
import MainHeader from './components/MainHeader';
import Nav from './components/Nav';
import MainDisplay from './components/MainDisplay';
import Users from './components/Users'
import { UserContext } from './contexts/UserContext'

function App() {
  const [categories, setCategories] = useState([])
  const [category, setCategory ] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState()

  useEffect(()=>{
      setIsLoading(true)
      getCategories().then((categoriesFromServer) =>{
          setCategories(categoriesFromServer)
          setIsLoading(false)
      })
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <div className="App">
          <MainHeader setUser={setUser}/>
          <Nav categories={categories} setCategory={setCategory} isLoading={isLoading} />
          <Routes>
            <Route path="/" element={<MainDisplay category={category} user={user}/>} />
            <Route path="/category/:categoryURL" element={<MainDisplay category={category}/>} />
            <Route path="/review/:review_idURL" element={<MainDisplay />} />
            <Route path="/users" element={<Users setUser={setUser}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
