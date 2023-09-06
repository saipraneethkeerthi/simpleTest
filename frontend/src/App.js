import logo from './logo.svg';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Services from './Components/Services';
import ServicesDetails from './Components/ServicesDetails';
import BookingForm from './Components/BookingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={Services}/>
          <Route path='/serviceDetails/:id' Component={ServicesDetails}/>
          <Route path='/booking' Component={BookingForm}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
