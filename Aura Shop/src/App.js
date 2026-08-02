import Layout from './Layout/Layout.js'
import Contact from './Contact/Contact.js';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/Home' element={'Home'}>

          </Route>
          <Route exact path='/about' element={'About us'}>

          </Route>
          
          <Route exact path='/contact' element={<Contact />}>

          </Route>

        </Routes>
        </Layout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
