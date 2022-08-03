import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { ProfileProvider } from './context/github/ProfileContext'


function App() {
  return (
    <ProfileProvider>
    <Router>
          <div className='flex flex-col justify-between  h-screen'>
            <Navbar/>
                <main className='container mx-auto  px-3 pb-12'>
                  <Routes>
                    <Route exact path ="/" element={<Home/>}/>
                    <Route path ="about" element={<About/>}/>
                    <Route path ="/notfound" element={<NotFound/>}/>
                    <Route path ="/*" element={<NotFound/>}/>
                  </Routes>
                </main>
            <Footer/>
          </div>
    </Router>
    </ProfileProvider>
    
  );
}

export default App;
