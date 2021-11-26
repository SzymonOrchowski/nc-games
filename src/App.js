import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { getCategories } from './utils/api';
import MainHeader from './components/MainHeader';
import Nav from './components/Nav';
import MainDisplay from './components/MainDisplay';
import { UserContext } from './contexts/UserContext'

function App() {
  const [categories, setCategories] = useState([])
  const [category, setCategory ] = useState('all')
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState('DefaultUser') // endpoint for users in my backend dosn't exist yet so user is hardcoded to 'DefaultUser' 

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
          <MainHeader />
          <Nav categories={categories} setCategory={setCategory} isLoading={isLoading}/>
          <Routes>
            <Route path="/" element={<MainDisplay category={category}/>} />
            <Route path="/category/:category" element={<MainDisplay category={category}/>} />
            <Route path="/:review_id" element={<MainDisplay />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
