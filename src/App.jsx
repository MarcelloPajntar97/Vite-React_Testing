
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './components/StartPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FirstPage />}></Route>
        <Route path='/page2' element={<SecondPage />}></Route>
        <Route path='/page3' element={<ThirdPage />}></Route>
      </Routes>
    </Router>
    
  )
  
}

export default App