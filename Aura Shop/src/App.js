import logo from './logo.svg';
import Layout from './Layout/Layout.js'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Layout ></Layout>}>

          </Route>
          <Route exact path='/about' element={<Layout Children={'About'}></Layout>}>

          </Route>
          <Route exact path='/contact' element={<Layout Children={'contact'}></Layout>}>

          </Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
