import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Restuarantlist from './components/Restuarantlist'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ViewRestuarant from './components/ViewRestuarant'
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header />
        </header>
        <Routes>
          <Route path='/'element={<Restuarantlist/>} />
          <Route path='view-restuarant/:id'element={<ViewRestuarant/>} />

          </Routes>         
        <Footer />
      </Router>
    </div>
  );
}

export default App;
